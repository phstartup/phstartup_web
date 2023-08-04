"use strict";
exports.id = 8963;
exports.ids = [8963];
exports.modules = {

/***/ 48963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ User)
});

// EXTERNAL MODULE: ./src/lib/helper.js
var helper = __webpack_require__(19585);
;// CONCATENATED MODULE: ./src/controllers/userInformation.js
const { PrismaClient , Prisma  } = __webpack_require__(53524);
const prisma = new PrismaClient();
class UserInformation {
    async create(data) {}
    async retrieve(condition) {
        const prisma = new PrismaClient();
        let nCondition = {
            where: {
                ...condition.where,
                deleted_at: null
            }
        };
        return await prisma.user_informations.findFirst(nCondition);
    }
    async update(id, data) {}
    async delete(id) {}
}

// EXTERNAL MODULE: ./node_modules/bcryptjs/index.js
var bcryptjs = __webpack_require__(12305);
// EXTERNAL MODULE: ./node_modules/jsonwebtoken/index.js
var jsonwebtoken = __webpack_require__(39518);
var jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken);
;// CONCATENATED MODULE: ./src/controllers/user.js
const { PrismaClient: user_PrismaClient , Prisma: user_Prisma  } = __webpack_require__(53524);




let user_helper = new helper/* default */.Z();
class User {
    async registerAccountOnly(user) {
        let prisma = new user_PrismaClient();
        const isExist = await prisma.users.findFirst({
            where: {
                OR: [
                    {
                        username: user.username
                    },
                    {
                        email: user.email
                    }
                ]
            }
        });
        if (isExist) {
            return "Already used.";
        }
        let data = user_Prisma.usersCreateInput;
        data = {
            username: user.username,
            password: await (0,bcryptjs.hash)(user.password, 12),
            email: user.email,
            account_type: 0,
            status: "not_verified",
            email_verified_at: new Date(),
            created_at: new Date(),
            updated_at: new Date()
        };
        try {
            return await prisma.users.create({
                data: data
            });
        } catch (e) {
            if (e instanceof user_Prisma.PrismaClientKnownRequestError) {}
            return null;
        }
    }
    async verifyHeaderToken(token) {
        const prisma = new user_PrismaClient();
        let result = await prisma.users.findFirst({
            where: {
                remember_token: token
            }
        });
        return result ? result : null;
    }
    async retrieveAdmin() {
        const prisma = new user_PrismaClient();
        let nCondition = {
            where: {
                deleted_at: null
            },
            orderBy: {
                updated_at: "desc"
            }
        };
        let result = await prisma.users.findMany(nCondition);
        if (result && result.length > 0) {
            for(let index = 0; index < result.length; index++){
                let item = result[index];
                item = user_helper.exclude(item, [
                    "remember_token",
                    "password"
                ]);
                let information = new UserInformation();
                let info = await information.retrieve({
                    where: {
                        user_id: item.id
                    }
                });
                if (info) {
                    result[index]["information"] = info;
                    result[index]["profile"] = info.profile;
                } else {
                    result[index]["information"] = null;
                    result[index]["profile"] = null;
                }
            }
        }
        return result;
    }
    async register(user, account, profile) {
        const prisma = new user_PrismaClient();
        let data = user_Prisma.usersCreateInput;
        data = {
            username: user.email,
            password: await (0,bcryptjs.hash)(user.email, 12),
            email: user.email,
            account_type: 0,
            status: "not_verified",
            email_verified_at: new Date(),
            created_at: new Date(),
            updated_at: new Date()
        };
        try {
            let accountCreated = await prisma.users.create({
                data: data
            });
            if (accountCreated) {
                // Create Information
                let iData = user_Prisma.user_informationsCreateInput;
                iData = {
                    user_id: accountCreated.id,
                    first_name: profile.given_name ? profile.given_name : "",
                    last_name: profile.family_name ? profile.family_name : "",
                    profile: profile.picture,
                    created_at: new Date(),
                    updated_at: new Date()
                };
                await prisma.user_informations.create({
                    data: iData
                });
                // Create Default Merchant
                return true;
            }
            return true;
        } catch (e) {
            if (e instanceof user_Prisma.PrismaClientKnownRequestError) {}
            return false;
        }
    }
    async updateToken(user, token) {
        const prisma = new user_PrismaClient();
        let updateData = user_Prisma.usersUncheckedUpdateInput;
        updateData = {
            remember_token: token,
            updated_at: new Date()
        };
        return await prisma.users.update({
            where: {
                email: user.email
            },
            data: updateData
        });
    }
    async auth(user, account, profile) {
        const prisma = new user_PrismaClient();
        const isExist = await prisma.users.findUnique({
            where: {
                email: user.email
            }
        });
        if (!isExist) {
            // register here
            let result = await this.register(user, account, profile);
            return result ? true : false;
        } else {
            let accountType = parseInt(isExist.account_type);
            let envAccountType = process.env.ACCOUNT_TYPE;
            let admin = process.env.ADMIN;
            if (envAccountType == admin) {
                // admin app
                if (accountType == envAccountType) {
                    // update token
                    this.updateToken(user, account.accessToken);
                    return true;
                } else {
                    return false;
                }
            } else {
                // merchant app
                if (accountType <= envAccountType) {
                    // update token
                    this.updateToken(user, account.accessToken);
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
    async get(user) {
        const prisma = new user_PrismaClient();
        const isExist = await prisma.users.findUnique({
            where: {
                email: user.email
            }
        });
        if (!isExist) {
            return null;
        } else {
            let information = new UserInformation();
            let info = await information.retrieve({
                where: {
                    user_id: isExist.id
                }
            });
            let userWithoutPassword = user_helper.exclude(isExist, [
                "password",
                "remember_token"
            ]);
            if (info) {
                userWithoutPassword["information"] = info;
            } else {
                userWithoutPassword["information"] = null;
            }
            return user_helper.stringify(userWithoutPassword);
        }
    }
    async getByCondition(condition) {
        const prisma = new user_PrismaClient();
        const isExist = await prisma.users.findUnique(condition);
        if (!isExist) {
            return null;
        } else {
            let information = new UserInformation();
            let info = await information.retrieve({
                where: {
                    user_id: isExist.id
                }
            });
            let userWithoutPassword = user_helper.exclude(isExist, [
                "password",
                "remember_token"
            ]);
            if (info) {
                userWithoutPassword["information"] = info;
            } else {
                userWithoutPassword["information"] = null;
            }
            return userWithoutPassword;
        }
    }
    async authenticate(user) {
        const prisma = new user_PrismaClient();
        const isExist = await prisma.users.findUnique({
            where: {
                email: user.email
            }
        });
        if (isExist && (0,bcryptjs.compare)(user.password, isExist.password)) {
            const userdata = {
                username: isExist.username,
                email: isExist.email,
                account_type: isExist.account_type
            };
            const token = jsonwebtoken_default().sign(userdata, process.env.CRYPTO_KEY, {
                expiresIn: 30 * 24 * 60 * 60
            });
            userdata["access_token"] = token;
            return userdata;
        } else {
            return null;
        }
    }
}


/***/ }),

/***/ 19585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Helper)
/* harmony export */ });
class Helper {
    response(data, status, message) {
        return JSON.stringify({
            data,
            status,
            message,
            timestamps: new Date()
        }, (key, value)=>typeof value === "bigint" ? value.toString() : value);
    }
    stringify(data) {
        return JSON.stringify(data, (key, value)=>typeof value === "bigint" ? value.toString() : value);
    }
    exclude(user, keys) {
        return Object.fromEntries(Object.entries(user).filter(([key])=>!keys.includes(key)));
    }
    codeGenerator(prefix, length = null) {
        var crypto = __webpack_require__(6113);
        var str = crypto.randomBytes(length ? length : 60).toString("hex");
        return prefix + "-" + str;
    }
    getName(user) {
        if (user) {
            if (!user.information) {
                return user.username;
            } else {
                let info = user.information;
                if (info.first_name && info.last_name) {
                    return info.first_name + " " + info.last_name;
                } else if (info.first_name) {
                    return info.first_name;
                } else {
                    return user.username;
                }
            }
        } else {
            return null;
        }
    }
}


/***/ })

};
;