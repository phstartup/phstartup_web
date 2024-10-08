const { Prisma } = require('@prisma/client')
import { prisma } from '@/lib/db'
import Helper from '@/lib/helper';
import UserInformation from './userInformation';
import { compare, hash } from 'bcryptjs';
import jwt from 'jsonwebtoken'
import Company from './company';
import Team from './team';

let helper = new Helper()
export default class User {
    async registerAccountOnly(user) {
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
            password: await hash(user.password, 12),
            email: user.email,
            account_type: 0,
            status: 'not_verified',
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
        let result = await prisma.users.findFirst({
            where: {
                remember_token: token
            }
        })

        if (result) {
            const company = new Company()
            let rCompany = await company.retrieveFirst({
                where: {
                    user_id: result.id
                }
            })

            if (rCompany == null) {
                const team = new Team()
                let rTeam = await team.retrieveFirstNoUser({
                    where: {
                        user_id: result.id
                    }
                })

                if (rTeam) {
                    rCompany = await company.retrieveFirst({
                        where: {
                            id: rTeam.company_id
                        }
                    })
                }
            }
            if (rCompany) {
                result['company'] = rCompany
            }
        }

        return result ? result : null
    }

    async retrieveAdmin() {
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
                item = helper.exclude(item, ['remember_token', 'password'])
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

        let data = Prisma.usersCreateInput
        data = {
            username: user.email,
            password: await hash(user.email, 12),
            email: user.email,
            account_type: 0,
            status: 'not_verified',
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
                let iData = Prisma.user_informationsCreateInput
                iData = {
                    user_id: accountCreated.id,
                    first_name: profile.given_name ? profile.given_name : '',
                    last_name: profile.family_name ? profile.family_name : '',
                    profile: profile.picture,
                    created_at: new Date(),
                    updated_at: new Date()
                }
                await prisma.user_informations.create({
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
            let userWithoutPassword = helper.exclude(isExist, ['password', 'remember_token'])

            if (info) {
                userWithoutPassword['information'] = info

            } else {
                userWithoutPassword['information'] = null
            }

            const company = new Company()
            let rCompany = await company.retrieveFirst({
                where: {
                    user_id: isExist.id
                }
            })

            if (rCompany == null) {
                const team = new Team()
                let rTeam = await team.retrieveFirstNoUser({
                    where: {
                        user_id: isExist.id
                    }
                })

                if (rTeam) {
                    rCompany = await company.retrieveFirst({
                        where: {
                            id: rTeam.company_id
                        }
                    })
                }
            }
            if (rCompany) {
                userWithoutPassword['company'] = rCompany
            }
            return helper.stringify(userWithoutPassword)
        }
    }

    async getByCondition(condition) {
        const isExist = await prisma.users.findUnique(condition)
        if (!isExist) {
            return null
        } else {
            let information = new UserInformation()
            let info = await information.retrieve({
                where: {
                    user_id: isExist.id
                }
            })
            let userWithoutPassword = helper.exclude(isExist, ['password', 'remember_token'])

            if (info) {
                userWithoutPassword['information'] = info

            } else {
                userWithoutPassword['information'] = null
            }
            return userWithoutPassword
        }
    }

    async authenticate(user) {
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
            const token = jwt.sign(
                userdata,
                process.env.CRYPTO_KEY,
                {
                    expiresIn: 30 * 24 * 60 * 60
                }
            )
            userdata['access_token'] = token
            return userdata
        } else {
            return null
        }
    }

}