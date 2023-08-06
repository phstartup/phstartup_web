const { Prisma } = require('@prisma/client')
import { prisma } from '@/lib/db'
import User from './user';
export default class Vouch {
    async create(data) {
        let mData = Prisma.vouchesCreateInput
        mData = {
            ...data,
            created_at: new Date(),
            updated_at: new Date()
        }
        const isExist = await prisma.vouches.findMany({
            where: {
                user_id: data.user_id,
                payload: data.payload,
                payload_value: data.payload_value
            }
        })

        if (isExist.length == 0) {
            let result = await prisma.vouches.create({
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
        let result = await prisma.vouches.findFirst(nCondition)
        if (result) {
            const user = new User()

            result['user'] = await user.getByCondition({
                where: {
                    id: result.user_id
                }
            })
        }
        return result
    }

    async retrieve(condition) {
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            }
        }
        let result = await prisma.vouches.findMany(nCondition)

        if (result && result.length > 0) {
            for (let index = 0; index < result.length; index++) {
                const item = result[index];

                const user = new User()

                result[index]['user'] = await user.getByCondition({
                    where: {
                        id: item.user_id
                    }
                })
            }
        }

        return result
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