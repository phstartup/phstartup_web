"use strict";
exports.id = 3838;
exports.ids = [3838];
exports.modules = {

/***/ 63838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Pitch)
/* harmony export */ });
const { PrismaClient , Prisma  } = __webpack_require__(53524);
const prisma = new PrismaClient();
class Pitch {
    async create(data) {
        let mData = Prisma.pitchesCreateInput;
        mData = {
            ...data,
            created_at: new Date(),
            updated_at: new Date()
        };
        const isExist = await prisma.pitches.findFirst({
            where: {
                company_id: data.company_id,
                type: data.type
            }
        });
        if (!isExist) {
            let result = await prisma.pitches.create({
                data: mData
            });
            return result;
        } else {
            return null;
        }
    }
    async retrieveFirst(condition) {
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            }
        };
        return await prisma.pitches.findFirst(nCondition);
    }
    async retrieve(condition) {
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            }
        };
        return await prisma.pitches.findMany(nCondition);
    }
    async update(id, data) {
        let updateData = Prisma.pitchesUncheckedUpdateInput;
        updateData = {
            ...data,
            updated_at: new Date()
        };
        return await prisma.pitches.update({
            where: {
                id: id
            },
            data: {
                ...updateData,
                updated_at: new Date()
            }
        });
    }
    async delete(condition) {
        let updateData = Prisma.pitchesUncheckedUpdateInput;
        updateData = {
            updated_at: new Date(),
            deleted_at: new Date()
        };
        return await prisma.pitches.update({
            where: {
                ...condition
            },
            data: {
                ...updateData
            }
        });
    }
}


/***/ })

};
;