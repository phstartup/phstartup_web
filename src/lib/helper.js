export default class Helper {
    response(data, status, message) {
        return JSON.stringify({
            data,
            status,
            message,
            timestamps: new Date()
        },
            (key, value) => (typeof value === 'bigint' ? value.toString() : value)
        )
    }

    stringify(data) {
        return JSON.stringify(data,
            (key, value) => (typeof value === 'bigint' ? value.toString() : value)
        )
    }

    exclude(user, keys) {
        return Object.fromEntries(
            Object.entries(user).filter(([key]) => !keys.includes(key))
        );
    }

    codeGenerator(prefix, length = null) {
        var crypto = require("crypto");
        var str = crypto.randomBytes(length ? length : 60).toString('hex');
        return prefix + '-' + str
    }

    getName(user) {
        if (user) {
            if (!user.information) {
                return user.username
            } else {
                let info = user.information
                if (info.first_name && info.last_name) {
                    return info.first_name + ' ' + info.last_name
                } else if (info.first_name) {
                    return info.first_name
                } else {
                    return user.username
                }
            }
        } else {
            return null
        }
    }
}