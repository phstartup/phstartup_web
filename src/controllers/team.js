const { Prisma } = require('@prisma/client')
import { prisma } from '@/lib/db'
import User from './user';
export default class Team {
    async create(data) {
        let mData = Prisma.teamsCreateInput
        mData = {
            ...data,
            created_at: new Date(),
            updated_at: new Date()
        }

        const isExist = await prisma.teams.findMany({
            where: {
                user_id: data.user_id,
                company_id: data.company_id
            }
        })

        if (isExist.length == 0) {
            let result = await prisma.teams.create({
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
        let result = await prisma.teams.findFirst(nCondition)
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
        let result = await prisma.teams.findMany(nCondition)
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
        let updateData = Prisma.teamsUncheckedUpdateInput
        updateData = {
            ...data,
            updated_at: new Date()
        }
        return await prisma.teams.update({
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
        let updateData = Prisma.teamsUncheckedUpdateInput
        updateData = {
            updated_at: new Date(),
            deleted_at: new Date()
        }
        return await prisma.teams.update({
            where: {
                ...condition
            },
            data: {
                ...updateData
            }
        })
    }

}