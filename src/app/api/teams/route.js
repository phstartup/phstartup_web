import Controller from "@/controllers/teams"
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

    const { position, about, video, company_id } = body
    if (body.id) {
        // update
        let result = await controller.update(
            body.id,
            {
                user_id: mwareAccount.id,
                company_id: company_id,
                payload,
                payload_value
            })
        return new NextResponse(helper.response(result, 200, null))
    } else if (position && about && video) {
        let result = await controller.create({
            user_id: mwareAccount.id,
            company_id: company_id,
            payload,
            payload_value
        })
        return new NextResponse(helper.response(result, 200, null))
    }
    return new NextResponse(helper.response(null, 200, null))

}