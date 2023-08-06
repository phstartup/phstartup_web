import Controller from "@/controllers/userInformation"
import Helper from "@/lib/helper";
import { NextResponse } from "next/server";
let helper = new Helper()
let controller = new Controller()


import Middleware from "@/lib/middleware"
const middleware = new Middleware();

export async function POST(req) {
    const mwareAccount = await middleware.check(req)
    if (mwareAccount == false) {
        return new Response(helper.response(null, 401, 'Invalid Accessed.'));
    }

    const body = await req.json()

    const { details, user_id } = body
    if (body.id && user_id == mwareAccount.id) {
        // update
        let result = await controller.update(
            body.id,
            {
                details
            })
        return new NextResponse(helper.response(result, 200, null))
    }
    return new NextResponse(helper.response(null, 200, null))

}