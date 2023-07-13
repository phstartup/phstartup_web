const { PrismaClient, Prisma } = require('@prisma/client')
import Helper from '@/lib/helper';
import UserInformation from './userInformation';
import { compare, hash } from 'bcryptjs';
import jwt from 'jsonwebtoken'

let helper = new Helper()
export default class User {
    async registerAccountOnly(user) {
        let prisma = new PrismaClient();
        const isExist = await prisma.users.findFirst({
            where: {
                OR: [
                    {
                        username: user.username
                    },
                    {
                        email: user.email
                    }
                ]
            }
        })
        if (isExist) {
            return 'Already used.'
        }

        let data = Prisma.usersCreateInput
        data = {
            username: user.username,
            code: helper.codeGenerator('act'),
            // code: user.username,
            password: await hash(user.password, 12),
            email: user.email,
            account_type: 0,
            status: 'not_verified',
            remember_token: '12321',
            email_verified_at: new Date(),
            created_at: new Date(),
            updated_at: new Date()
        }
        try {
            return await prisma.users.create({
                data: data
            });

        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
            }
            return null
        }
    }

    async verifyHeaderToken(token) {
        const prisma = new PrismaClient();

        let result = await prisma.users.findUnique({
            where: {
                remember_token: token
            }
        })

        return result ? result : null
    }

    async retrieveAdmin() {
        const prisma = new PrismaClient();
        let nCondition = {
            where: {
                deleted_at: null
            },
            orderBy: {
                updated_at: 'desc'
            }
        }
        let result = await prisma.users.findMany(nCondition)

        if (result && result.length > 0) {
            for (let index = 0; index < result.length; index++) {
                let item = result[index]
                item = helper.exclude(item, ['remember_token', 'id', 'password'])
                let information = new UserInformation()
                let info = await information.retrieve({
                    where: {
                        user_id: item.id
                    }
                })
                if (info) {
                    result[index]['information'] = info
                    result[index]['profile'] = info.profile
                } else {
                    result[index]['information'] = null
                    result[index]['profile'] = null
                }
            }
        }
        return result
    }

    async register(user, account, profile) {

        const prisma = new PrismaClient();

        let data = Prisma.usersCreateInput
        data = {
            username: user.email,
            code: helper.codeGenerator('act'),
            // code: user.email,
            password: await hash(user.email, 12),
            email: user.email,
            account_type: 0,
            status: 'not_verified',
            remember_token: '12321',
            email_verified_at: new Date(),
            created_at: new Date(),
            updated_at: new Date()
        }
        try {
            let accountCreated = await prisma.users.create({
                data: data
            });

            if (accountCreated) {
                // Create Information
                let iData = Prisma.account_informationCreateInput
                iData = {
                    user_id: accountCreated.id,
                    first_name: profile.given_name ? profile.given_name : '',
                    last_name: profile.family_name ? profile.family_name : '',
                    profile: profile.picture,
                    created_at: new Date(),
                    updated_at: new Date()
                }
                await prisma.account_information.create({
                    data: iData
                })

                // Create Default Merchant

                return true
            }
            return true
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
            }
            return false
        }
    }

    async updateToken(user, token) {
        const prisma = new PrismaClient();
        let updateData = Prisma.usersUncheckedUpdateInput
        updateData = {
            remember_token: token,
            updated_at: new Date()
        }
        return await prisma.users.update({
            where: {
                email: user.email
            },
            data: updateData
        })
    }

    async auth(user, account, profile) {
        const prisma = new PrismaClient();

        const isExist = await prisma.users.findUnique({
            where: {
                email: user.email
            }
        })



        if (!isExist) {
            // register here
            let result = await this.register(user, account, profile)
            return result ? true : false
        } else {
            let accountType = parseInt(isExist.account_type)
            let envAccountType = process.env.ACCOUNT_TYPE
            let admin = process.env.ADMIN
            if (envAccountType == admin) {
                // admin app
                if (accountType == envAccountType) {
                    // update token
                    this.updateToken(user, account.accessToken)
                    return true
                } else {
                    return false
                }
            } else {
                // merchant app
                if (accountType <= envAccountType) {
                    // update token
                    this.updateToken(user, account.accessToken)
                    return true
                } else {
                    return false
                }
            }
        }
    }

    async get(user) {
        const prisma = new PrismaClient();
        const isExist = await prisma.users.findUnique({
            where: {
                email: user.email
            }
        })

        if (!isExist) {
            return null
        } else {
            let information = new UserInformation()
            let info = await information.retrieve({
                where: {
                    user_id: isExist.id
                }
            })
            let userWithoutPassword = helper.exclude(isExist, ['password', 'remember_token', 'id'])

            if (info) {
                info = helper.exclude(info, ['id', 'user_id'])
                userWithoutPassword['information'] = info

            } else {
                userWithoutPassword['information'] = null
            }
            return helper.stringify(userWithoutPassword)
        }
    }

    async authenticate(user) {
        const prisma = new PrismaClient();
        const isExist = await prisma.users.findUnique({
            where: {
                email: user.email
            }
        })
        if (isExist && compare(user.password, isExist.password)) {
            const userdata = {
                username: isExist.username,
                email: isExist.email,
                account_type: isExist.account_type,
            }
            const token =  jwt.sign(
                userdata,
                process.env.CRYPTO_KEY,
                {
                    expiresIn: 30 * 24 * 60 * 60
                }
            )
            userdata['access_token'] = token
            return userdata
        }else{
            return null
        }
    }

}