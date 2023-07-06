const { PrismaClient, Prisma } = require('@prisma/client')
export default class User {
    async registerAccountOnly(user) {
        const prisma = new PrismaClient();
        const isExist = await prisma.user.findFirst({
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
        if(isExist){
            return 'Already used.'
        }

        let data = Prisma.userCreateInput
        data = {
            username: user.username,
            code: user.username,
            password: user.password,
            email: user.email,
            account_type: 0,
            status: 'not_verified',
            email_verified_at: new Date(),
            created_at: new Date(),
            updated_at: new Date()
        }
        try {
            return await prisma.user.create({
                data: data
            });

        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
            }
            return null
        }
    }

    async register(user, account, profile) {

        const prisma = new PrismaClient();

        let data = Prisma.userCreateInput
        data = {
            username: user.email,
            code: user.email,
            password: '12312',
            email: user.email,
            account_type: 0,
            status: 'not_verified',
            email_verified_at: new Date(),
            created_at: new Date(),
            updated_at: new Date()
        }
        try {
            let accountCreated = await prisma.user.create({
                data: data
            });

            if (accountCreated) {
                // Create Information
                let iData = Prisma.user_informationsCreateInput
                iData = {
                    account_id: accountCreated.id,
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
            console.log({
                e
            })
            return false
        }
    }

    async auth(user, account, profile) {
        const prisma = new PrismaClient();

        const isExist = await prisma.user.findUnique({
            where: {
                email: user.email
            }
        })

        if (!isExist) {
            // register here
            let result = await this.register(user, account, profile)
            return result ? true : false
        } else {
            // update token
            return true
        }
    }
}