const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient();
export default class UserInformation {
    async create(data) {
        let exist = await prisma.companies.findFirst({
            where: {
                user_id: data.user_id
            }
        })

        if (exist) {
            // update only here
            return null
        } else {
            // create
            let sData = Prisma.companiesCreateInput
            sData = {
                ...data,
                created_at: new Date(),
                updated_at: new Date()
            }

            let result = await prisma.companies.create(sData);
            return result;
        }

    }


    async retrieve(data) {

    }

    async update(condition, data) {
        let result = await prisma.companies.update(condition, data);
        return result;
    }

    async delete(id) {

    }


}