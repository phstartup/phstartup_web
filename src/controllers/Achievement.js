const { Prisma } = require('@prisma/client')
import { prisma } from '@/lib/db'
export default class Achievement {
    async create(data) {
        let mData = Prisma.achievementsCreateInput
        mData = {
            ...data,
            created_at: new Date(),
            updated_at: new Date()
        }

        let result = await prisma.achievements.create({
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
        return await prisma.achievements.findFirst(nCondition)
    }

    async retrieve(condition) {
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            },
            orderBy: {
                updated_at: 'desc'
            }
        }
        return await prisma.achievements.findMany(nCondition)
    }

    async update(id, data) {
        let updateData = Prisma.achievementsUncheckedUpdateInput
        updateData = {
            ...data,
            updated_at: new Date()
        }
        return await prisma.achievements.update({
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
        let updateData = Prisma.achievementsUncheckedUpdateInput
        updateData = {
            updated_at: new Date(),
            deleted_at: new Date()
        }
        return await prisma.achievements.update({
            where: {
                ...condition
            },
            data: {
                ...updateData
            }
        })
    }

}