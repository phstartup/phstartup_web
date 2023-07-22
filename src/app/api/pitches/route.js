import Controller from "@/controllers/pitch"
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


    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search)
    const company_id = searchParams.get('company_id')

    if (company_id) {
        let result = await controller.retrieve({
            where: {
                company_id: company_id
            }
        })
        result = result ? result : null
        return new NextResponse(helper.response(result, 200, null));
    } else {
        // let result = await controller.retrieveAdmin()
        return new NextResponse(helper.response('Hello', 200, null));
    }
}

export async function POST(req) {
    const mwareAccount = await middleware.check(req)
    if (mwareAccount == false) {
        return new Response(helper.response(null, 401, 'Invalid Accessed.'));
    }

    const body = await req.json()

    const { type, company_id, url } = body
    if (body.id) {
        // update
        let result = await controller.update(
            body.id,
            {
                user_id: mwareAccount.id,
                type,
                company_id,
                url
            })
        return new NextResponse(helper.response(result, 200, null))
    } else if (url && company_id && type) {
        let result = await controller.create({
            user_id: mwareAccount.id,user_id: mwareAccount.id,
            type,
            company_id,
            url
        })
        return new NextResponse(helper.response(result, 200, null))
    }
    return new NextResponse(helper.response(null, 200, null))

}