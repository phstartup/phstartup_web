const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient();
export default class UserInformation {

    async retrieve(condition) {
        const prisma = new PrismaClient();
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            }
        }
        let result = await prisma.user_informations.findFirst(nCondition)
        if(result){
            result['details'] = result.details ? JSON.parse(result.details) : null
        }
        return result
    }

    async update(id, data) {
        let updateData = Prisma.user_informationsUncheckedUpdateInput
        updateData = {
            ...data,
            updated_at: new Date()
        }
        return await prisma.user_informations.update({
            where: {
                id: id
            },
            data: {
                ...updateData,
                updated_at: new Date(),
            }
        })
    }
}