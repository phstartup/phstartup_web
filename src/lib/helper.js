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
}