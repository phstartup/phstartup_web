const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient();
export default class Vouch {
    async create(data) {
        let mData = Prisma.vouchesCreateInput
        mData = {
            ...data,
            created_at: new Date(),
            updated_at: new Date()
        }
        const isExist = await prisma.pitches.findFirst({
            where: {
                user_id: data.user_id,
                payload: data.payload,
                payload_value: data.payload_value
            }
        })

        if (!isExist) {
            let result = await prisma.pitches.create({
                data: mData
            });
            return result;
        } else {
            return null
        }
    }

    async retrieveFirst(condition) {
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            }
        }
        return await prisma.vouches.findFirst(nCondition)
    }

    async retrieve(condition) {
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            }
        }
        return await prisma.vouches.findMany(nCondition)
    }

    async update(id, data) {
        let updateData = Prisma.vouchesUncheckedUpdateInput
        updateData = {
            ...data,
            updated_at: new Date()
        }
        return await prisma.vouches.update({
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
        let updateData = Prisma.vouchesUncheckedUpdateInput
        updateData = {
            updated_at: new Date(),
            deleted_at: new Date()
        }
        return await prisma.vouches.update({
            where: {
                ...condition
            },
            data: {
                ...updateData
            }
        })
    }

}