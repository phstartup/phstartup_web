import Controller from "@/controllers/company"
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
    const user_id = searchParams.get('user_id')

    if (user_id) {
        let result = await controller.retrieveFirst({
            where: {
                user_id: user_id
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

    const { name, description, category, industries, address, website, email_address, contact_number, settings, status } = body
    if (body.id) {
        // update
        let result = await controller.update(
            body.id,
            {
                user_id: mwareAccount.id,
                name,
                description,
                category,
                industries,
                address,
                website,
                email_address,
                contact_number,
                settings,
                status
            })
        return new NextResponse(helper.response(result, 200, null))
    } else if (name && description && category && industries && address && website && email_address && contact_number && settings) {
        // create
        console.log('create here')
        let result = await controller.create({
            user_id: mwareAccount.id,
            name,
            description,
            category,
            industries,
            address,
            website,
            email_address,
            contact_number,
            settings,
            status
        })
        return new NextResponse(helper.response(result, 200, null))
    }
    return new NextResponse(helper.response(null, 200, null))

}