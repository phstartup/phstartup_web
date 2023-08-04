"use strict";
exports.id = 6914;
exports.ids = [6914];
exports.modules = {

/***/ 46914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Service)
/* harmony export */ });
const { PrismaClient , Prisma  } = __webpack_require__(53524);
const prisma = new PrismaClient();
class Service {
    async create(data) {
        let mData = Prisma.servicesCreateInput;
        mData = {
            ...data,
            created_at: new Date(),
            updated_at: new Date()
        };
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
        };
        return await prisma.services.findFirst(nCondition);
    }
    async retrieve(condition) {
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            },
            orderBy: {
                updated_at: "desc"
            }
        };
        return await prisma.services.findMany(nCondition);
    }
    async update(id, data) {
        let updateData = Prisma.servicesUncheckedUpdateInput;
        updateData = {
            ...data,
            updated_at: new Date()
        };
        return await prisma.services.update({
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
        let updateData = Prisma.servicesUncheckedUpdateInput;
        updateData = {
            updated_at: new Date(),
            deleted_at: new Date()
        };
        return await prisma.services.update({
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