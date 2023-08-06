const { Prisma } = require('@prisma/client')
import { prisma } from '@/lib/db'
var moment = require('moment'); 
import User from './user';
export default class Comment {

    async create(data) {
        let mData = Prisma.commentsCreateInput
        mData = {
            ...data,
            created_at: new Date(),
            updated_at: new Date()
        }

        let result = await prisma.comments.create({
            data: mData
        });
        return result;
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
        let result = await prisma.comments.findMany(nCondition)

        if (result && result.length > 0) {
            for (let index = 0; index < result.length; index++) {
                const item = result[index];

                const user = new User()

                result[index]['user'] = await user.getByCondition({
                    where: {
                        id: item.user_id
                    }
                })

                result[index]['updated_at'] = moment(item.updated_at).fromNow()
            }
        }
        return result
    }

    async update(id, data) {
        let updateData = Prisma.commentsUncheckedUpdateInput
        updateData = {
            ...data,
            updated_at: new Date()
        }
        return await prisma.comments.update({
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
        let updateData = Prisma.commentsUncheckedUpdateInput
        updateData = {
            updated_at: new Date(),
            deleted_at: new Date()
        }
        return await prisma.comments.update({
            where: {
                ...condition
            },
            data: {
                ...updateData
            }
        })
    }

}