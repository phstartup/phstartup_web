import Controller from "@/controllers/view"
import Helper from "@/lib/helper";
import { NextResponse } from "next/server";
let helper = new Helper()
let controller = new Controller()


import Middleware from "@/lib/middleware"
const middleware = new Middleware();

export async function POST(req) {
    const mwareAccount = await middleware.check(req)
    // if (mwareAccount == false) {
    //     return new Response(helper.response(null, 401, 'Invalid Accessed.'));
    // }

    const body = await req.json()

    const { payload, payload_value } = body
    if (payload && payload_value) {
        let result = await controller.create({
            user_id: mwareAccount ? mwareAccount.id : '0',
            payload,
            payload_value
        })
        return new NextResponse(helper.response(result, 200, null))
    }

    return new NextResponse(helper.response(null, 200, null))
}