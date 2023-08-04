"use strict";
exports.id = 929;
exports.ids = [929];
exports.modules = {

/***/ 13515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UserInformation)
/* harmony export */ });
/* harmony import */ var _pitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63838);
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46914);
/* harmony import */ var _Achievement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34922);



const { PrismaClient , Prisma  } = __webpack_require__(53524);
const prisma = new PrismaClient();
class UserInformation {
    async create(data) {
        let mData = Prisma.companiesCreateInput;
        mData = {
            ...data,
            created_at: new Date(),
            updated_at: new Date()
        };
        const isExist = await prisma.companies.findFirst({
            where: {
                user_id: data.user_id
            }
        });
        if (!isExist) {
            let result = await prisma.companies.create({
                data: mData
            });
            return result;
        } else {
            return null;
        }
    }
    async retrieveHome(condition) {
        let nCondition = {
            where: {
                status: "verified",
                deleted_at: null
            }
        };
        let result = await prisma.companies.findMany(nCondition);
        if (result && result.length > 0) {
            for(let index = 0; index < result.length; index++){
                const item = result[index];
                let pitch = new _pitch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z();
                result[index]["pitches"] = await pitch.retrieve({
                    where: {
                        company_id: item.id
                    }
                });
                let service = new _Service__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z();
                result[index]["services"] = await service.retrieve({
                    where: {
                        company_id: item.id
                    }
                });
                let achievement = new _Achievement__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z();
                result[index]["achievements"] = await achievement.retrieve({
                    where: {
                        company_id: item.id
                    }
                });
                result[index]["settings"] = JSON.parse(item.settings);
            }
        }
        return result ? result : null;
    }
    async retrieveFirst(condition) {
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            }
        };
        let result = await prisma.companies.findFirst(nCondition);
        if (result) {
            let pitch = new _pitch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z();
            result["pitches"] = await pitch.retrieve({
                where: {
                    company_id: result.id
                }
            });
            let service = new _Service__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z();
            result["services"] = await service.retrieve({
                where: {
                    company_id: result.id
                }
            });
            let achievement = new _Achievement__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z();
            result["achievements"] = await achievement.retrieve({
                where: {
                    company_id: result.id
                }
            });
            result["settings"] = JSON.parse(result["settings"]);
        }
        return result ? result : null;
    }
    async retrieve(condition) {
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            }
        };
        return await prisma.companies.findFirst(nCondition);
    }
    async update(id, data) {
        let updateData = Prisma.companiesUncheckedUpdateInput;
        updateData = {
            ...data,
            updated_at: new Date()
        };
        return await prisma.companies.update({
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
        let updateData = Prisma.companiesUncheckedUpdateInput;
        updateData = {
            updated_at: new Date(),
            deleted_at: new Date()
        };
        return await prisma.companies.update({
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