import Controller from "@/controllers/company"
import Helper from "@/lib/helper";
import { NextResponse } from "next/server";
let helper = new Helper()
let controller = new Controller()


import Middleware from "@/lib/middleware"
const middleware = new Middleware();



export async function GET(req) {
    // const mwareAccount = await middleware.check(req)
    // if (mwareAccount == false) {
    //     return new Response(helper.response(null, 401, 'Invalid Accessed.'));
    // }

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search)
    const id = searchParams.get('id')

    if (id) {
        let result = await controller.retrieveFirst({
            where: {
                id: id
            }
        })
        result = result ? result : null
        return new NextResponse(helper.response(result, 200, null));
    } else {
        let result = await controller.retrieveHome()
        result = result ? result : null
        return new NextResponse(helper.response(result, 200, null));
    }
}