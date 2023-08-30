const { Prisma } = require('@prisma/client')
import { prisma } from '@/lib/db'
export default class View {
    async create(data) {
        let mData = Prisma.viewsCreateInput
        mData = {
            ...data,
            created_at: new Date(),
            updated_at: new Date()
        }

        let result = await prisma.views.create({
            data: mData
        });
        return result;
    }

    async createUnique(data, user = null) {
        if(user){
            let isExist = await this.retrieveFirst({
                where: {
                    payload: data.payload,
                    payload_value: data.payload_value,
                    user_id: user.id
                }
            })

            if(!isExist){
                return await this.create({
                    ...data,
                    user_id: user.id
                })
            }
        }else{
            return await this.create({
                ...data,
                user_id: '0'
            })
        }
    }

    async retrieveFirst(condition) {
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            }
        }
        return await prisma.views.findFirst(nCondition)
    }

    async retrieve(condition) {
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            }
        }
        return await prisma.views.findMany(nCondition)
    }

    async getTotal(condition) {
        let result = await prisma.views.aggregate({
            _count: {
                id: true
            },
            where: {
                ...condition.where,
                deleted_at: null
            }
        })
        return result ? result._count.id : null
    }
}