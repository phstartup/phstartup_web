import Controller from "@/controllers/notification"
import Helper from "@/lib/helper";
import { NextResponse } from "next/server";
let helper = new Helper()
let controller = new Controller()


import Middleware from "@/lib/middleware"
const middleware = new Middleware();

export async function GET(req) {
    const mwareAccount = await middleware.check(req)
    if (mwareAccount == false) {
        return new Response(helper.response(null, 401, 'Invalid Accessed.'));
    }

    let result = await controller.retrieve()
    result = result ? result : null
    return new NextResponse(helper.response(result, 200, null));
}

export async function POST(req) {
    const mwareAccount = await middleware.check(req)
    if (mwareAccount == false) {
        return new Response(helper.response(null, 401, 'Invalid Accessed.'));
    }

    const body = await req.json()

    const { user_id, type, message } = body
    if (body.id) {
        // update
        let result = await controller.update(
            body.id,
            {
                sender: mwareAccount.id,
                user_id,
                type,
                message
            })
        return new NextResponse(helper.response(result, 200, null))
    } else if (user_id && type && message) {
        let result = await controller.create({
            sender: mwareAccount.id,
            user_id,
            type,
            message
        })
        return new NextResponse(helper.response(result, 200, null))
    }
    return new NextResponse(helper.response(null, 200, null))

}