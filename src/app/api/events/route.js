import Controller from "@/controllers/event"
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

    if (mwareAccount && !mwareAccount.company) {
        return new Response(helper.response(null, 402, 'No Company Details.'));
    }

    const body = await req.json()

    const { title, description, link, target, price, currency, start_date, end_date } = body
    if (body.id) {
        // update
        let result = await controller.update(
            body.id,
            {
                user_id: mwareAccount.id,
                company_id: mwareAccount.company.id,
                title,
                description,
                link,
                target,
                price,
                currency,
                start_date,
                end_date
            })
        return new NextResponse(helper.response(result, 200, null))
    } else if (title && description && link && target && price && currency && start_date && end_date) {
        let result = await controller.create({
            user_id: mwareAccount.id,
            company_id: mwareAccount.company.id,
            title,
            description,
            link,
            target,
            price,
            currency,
            start_date,
            end_date
        })
        return new NextResponse(helper.response(result, 200, null))
    }
    return new NextResponse(helper.response(null, 200, null))

}