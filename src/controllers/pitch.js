const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient();
export default class Pitch {
    async create(data) {
        let mData = Prisma.pitchesCreateInput
        mData = {
            ...data,
            created_at: new Date(),
            updated_at: new Date()
        }

        const isExist = await prisma.pitches.findFirst({
            where: {
                company_id: data.company_id,
                type: data.type
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
        return await prisma.pitches.findFirst(nCondition)
    }

    async retrieve(condition) {
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            }
        }
        return await prisma.pitches.findMany(nCondition)
    }

    async update(id, data) {
        let updateData = Prisma.pitchesUncheckedUpdateInput
        updateData = {
            ...data,
            updated_at: new Date()
        }
        return await prisma.pitches.update({
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
        let updateData = Prisma.pitchesUncheckedUpdateInput
        updateData = {
            updated_at: new Date(),
            deleted_at: new Date()
        }
        return await prisma.pitches.update({
            where: {
                ...condition
            },
            data: {
                ...updateData
            }
        })
    }

}