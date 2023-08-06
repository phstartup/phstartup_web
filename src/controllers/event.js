const { Prisma } = require('@prisma/client')
import { prisma } from '@/lib/db'
export default class Event {
    async create(data) {
        let mData = Prisma.eventsCreateInput
        mData = {
            ...data,
            created_at: new Date(),
            updated_at: new Date()
        }

        let result = await prisma.events.create({
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
        return await prisma.events.findFirst(nCondition)
    }

    async retrieve(condition) {
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            }
        }
        return await prisma.events.findMany(nCondition)
    }

    async update(id, data) {
        let updateData = Prisma.eventsUncheckedUpdateInput
        updateData = {
            ...data,
            updated_at: new Date()
        }
        return await prisma.events.update({
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
        let updateData = Prisma.eventsUncheckedUpdateInput
        updateData = {
            updated_at: new Date(),
            deleted_at: new Date()
        }
        return await prisma.events.update({
            where: {
                ...condition
            },
            data: {
                ...updateData
            }
        })
    }

}