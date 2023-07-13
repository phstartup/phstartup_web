const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient();
export default class UserInformation {
    async create(data) {
    }

    async retrieve(condition) {
        const prisma = new PrismaClient();
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            }
        }
        return await prisma.user_informations.findFirst(nCondition)
    }

    async update(id, data) {
    }

    async delete(id) {

    }


}