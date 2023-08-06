const { Prisma } = require('@prisma/client')
import { prisma } from '@/lib/db'
export default class Service {
    async create(data) {
        let mData = Prisma.servicesCreateInput
        mData = {
            ...data,
            created_at: new Date(),
            updated_at: new Date()
        }

        let result = await prisma.services.create({
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
        return await prisma.services.findFirst(nCondition)
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
        return await prisma.services.findMany(nCondition)
    }

    async update(id, data) {
        let updateData = Prisma.servicesUncheckedUpdateInput
        updateData = {
            ...data,
            updated_at: new Date()
        }
        return await prisma.services.update({
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
        let updateData = Prisma.servicesUncheckedUpdateInput
        updateData = {
            updated_at: new Date(),
            deleted_at: new Date()
        }
        return await prisma.services.update({
            where: {
                ...condition
            },
            data: {
                ...updateData
            }
        })
    }

}