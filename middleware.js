import { NextResponse } from "next/server"
// export { default } from "next-auth/middleware"
// export const config = {
//     matcher: ['/dashboard', '/products/:path*', '/revenue', '/settings', '/profile', '/orders/:path*', '/invoice', '/ads/:path*']
// }

const allowedOrigins = process.env.NODE_ENV == 'production'
 ? ['https://phstartup.org', 'https://www.phstartup.org'] 
 : ['http://localhost:3000']

export async function middleware(req){
    console.log('Hello Middleware')

    const origin = req.headers.get('origin')

    if(origin && !allowedOrigins.includes(origin)){
        return new NextResponse(null, {
            status: 400,
            statusText: 'Bad Request',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return new NextResponse().next
}

export const config = {
    matcher: ['/api/:path*']
}