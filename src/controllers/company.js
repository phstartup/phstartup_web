import Pitch from './pitch';
import Service from './Service';
import Achievement from './Achievement'
import Vouch from './vouch';
import Team from './team'
import View from './view'
const { Prisma } = require('@prisma/client')
import { prisma } from '@/lib/db'
export default class Company {
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

    async retrieveHome(user) {
        let nCondition = {
            where: {
                status: 'verified',
                deleted_at: null
            }
        }
        let result = await prisma.companies.findMany(nCondition)
        if (result && result.length > 0) {
            for (let index = 0; index < result.length; index++) {
                const item = result[index];
                let pitch = new Pitch()
                result[index]['pitches'] = await pitch.retrieve({
                    where: {
                        company_id: item.id,
                        type: '60 Seconds'
                    }
                })

                let service = new Service()
                result[index]['services'] = await service.retrieve({
                    where: {
                        company_id: item.id
                    }
                })

                let achievement = new Achievement()
                result[index]['achievements'] = await achievement.retrieve({
                    where: {
                        company_id: item.id
                    }
                })

                let vouch = new Vouch()

                let rVouch = null

                if (user) {
                    rVouch = await vouch.retrieve({
                        where: {
                            payload_value: result.id,
                            user_id: user.id
                        }
                    })
                }

                result['vouch_flag'] = rVouch && rVouch.length > 0 ? true : false
                result['vouches'] = await vouch.retrieve({
                    where: {
                        payload_value: result.id
                    }
                })

                let team = new Team()
                result['teams'] = await team.retrieve({
                    where: {
                        company_id: result.id
                    }
                })

                result[index]['settings'] = JSON.parse(item.settings)
            }
        }

        return result ? result : null
    }

    async retrieveFirstWithAccount(condition, user, createView = false) {
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            }
        }
        let result = await prisma.companies.findFirst(nCondition)

        if (result) {
            if (createView) {
                let view = new View()
                await view.createUnique({
                    payload: 'company',
                    payload_value: result.id
                }, user)
            }


            let pitch = new Pitch()
            result['pitches'] = await pitch.retrieve({
                where: {
                    company_id: result.id
                }
            })

            let service = new Service()
            result['services'] = await service.retrieve({
                where: {
                    company_id: result.id
                }
            })

            let achievement = new Achievement()
            result['achievements'] = await achievement.retrieve({
                where: {
                    company_id: result.id
                }
            })

            let vouch = new Vouch()
            const rVouch = await vouch.retrieve({
                where: {
                    payload_value: result.id,
                    user_id: user.id
                }
            })
            result['vouch_flag'] = rVouch && rVouch.length > 0 ? true : false
            result['vouches'] = await vouch.retrieve({
                where: {
                    payload_value: result.id
                }
            })

            let team = new Team()
            result['teams'] = await team.retrieve({
                where: {
                    company_id: result.id
                }
            })

            result['settings'] = JSON.parse(result['settings'])
        }
        return result ? result : null
    }

    async retrieveFirst(condition, createView = false) {
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            }
        }
        let result = await prisma.companies.findFirst(nCondition)

        if (result) {
            if(createView){
                let view = new View()
                await view.createUnique({
                    payload: 'company',
                    payload_value: result.id
                })
            }

            let pitch = new Pitch()
            result['pitches'] = await pitch.retrieve({
                where: {
                    company_id: result.id
                }
            })

            let service = new Service()
            result['services'] = await service.retrieve({
                where: {
                    company_id: result.id
                }
            })

            let achievement = new Achievement()
            result['achievements'] = await achievement.retrieve({
                where: {
                    company_id: result.id
                }
            })

            let team = new Team()
            result['teams'] = await team.retrieve({
                where: {
                    company_id: result.id
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
        let result = await prisma.companies.findFirst(nCondition)
        if (result) {
            result['settings'] = result.settings ? JSON.parse(result.settings) : null
        }
        return result
    }

    async retrieveByCondition(condition) {
        let result = await prisma.companies.findMany(condition)
        if (result && result.length > 0) {
            for (let index = 0; index < result.length; index++) {
                const item = result[index];
                result[index]['settings'] = item.settings ? JSON.parse(item.settings) : null
            }
        }
        return result
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