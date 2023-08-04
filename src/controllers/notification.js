const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient();
export default class Notification {
    async create(data) {
        let mData = Prisma.notificationsCreateInput
        mData = {
            ...data,
            created_at: new Date(),
            updated_at: new Date()
        }

        let result = await prisma.notifications.create({
            data: mData
        });
        return result;
    }

    async retrieveFirst(condition) {
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            }
        }
        return await prisma.notifications.findFirst(nCondition)
    }

    async retrieve(condition) {
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            }
        }
        return await prisma.notifications.findMany(nCondition)
    }

    async update(id, data) {
        let updateData = Prisma.notificationsUncheckedUpdateInput
        updateData = {
            ...data,
            updated_at: new Date()
        }
        return await prisma.notifications.update({
            where: {
                id: id
            },
            data: {
                ...updateData,
                updated_at: new Date(),
            }
        })
    }

    async delete(condition) {
        let updateData = Prisma.notificationsUncheckedUpdateInput
        updateData = {
            updated_at: new Date(),
            deleted_at: new Date()
        }
        return await prisma.notifications.update({
            where: {
                ...condition
            },
            data: {
                ...updateData
            }
        })
    }

}