
import User from '@/controllers/user'

export default class Middleware {
    async check(request) {
        const Authorization = request.headers.get('Authorization')

        if (request.url.includes('/api/auth')) {
            return true
        } else if (!Authorization) {
            return false
        } else {
            let token = Authorization.replace('Bearer ', '')
            let user = new User()
            let rUser = await user.verifyHeaderToken(token)
            
            if (rUser == null) {
                return false
            }
            return rUser
        }
    }

}