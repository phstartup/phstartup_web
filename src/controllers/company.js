import Pitch from './pitch';
import Service from './Service';
import Achievement from './Achievement'
const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient();
export default class UserInformation {
    async create(data) {
        let mData = Prisma.companiesCreateInput
        mData = {
            ...data,
            created_at: new Date(),
            updated_at: new Date()
        }

        const isExist = await prisma.companies.findFirst({
            where: {
                user_id: data.user_id
            }
        })

        if (!isExist) {
            let result = await prisma.companies.create({
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
        let result = await prisma.companies.findFirst(nCondition)
        if(result){
            let pitch = new Pitch()
            result['pitches'] = await pitch.retrieve({
                where: {
                    company_id: result.company_id
                }
            })

            let service = new Service()
            result['services'] = await service.retrieve({
                where: {
                    company_id: result.company_id
                }
            })

            let achievement = new Achievement()
            result['achievements'] = await achievement.retrieve({
                where: {
                    company_id: result.company_id
                }
            })

            result['settings'] = JSON.parse(result['settings'])
        }
        return result ? result : null
    }

    async retrieve(condition) {
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            }
        }
        return await prisma.companies.findFirst(nCondition)
    }

    async update(id, data) {
        let updateData = Prisma.companiesUncheckedUpdateInput
        updateData = {
            ...data,
            updated_at: new Date()
        }
        return await prisma.companies.update({
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
        let updateData = Prisma.companiesUncheckedUpdateInput
        updateData = {
            updated_at: new Date(),
            deleted_at: new Date()
        }
        return await prisma.companies.update({
            where: {
                ...condition
            },
            data: {
                ...updateData
            }
        })
    }

}