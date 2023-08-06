const { Prisma } = require('@prisma/client')
import { prisma } from '@/lib/db'
import User from './user';
var moment = require('moment'); 
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
            },
            orderBy: {
                updated_at: 'desc'
            }
        }
        let result =  await prisma.notifications.findMany(nCondition)
        if(result && result.length > 0){
            for (let index = 0; index < result.length; index++) {
                const item = result[index];
                let user = new User()
                let uResult = await user.getByCondition({
                    where: {
                        id: item.sender
                    }
                })
                result[index]['user'] = uResult;
                result[index]['updated_at'] = moment(item.updated_at).fromNow()
            }
        }

        return result
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