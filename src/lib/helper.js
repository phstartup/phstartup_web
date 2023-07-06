export default class Helper{
    response(data, status, message){
        return JSON.stringify({
            data,
            status,
            message,
            timestamps: new Date()
        },
        (key, value) => (typeof value === 'bigint' ? value.toString() : value)
        )
    }
}