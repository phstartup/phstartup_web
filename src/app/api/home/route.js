import Controller from "@/controllers/company"
import Helper from "@/lib/helper";
import { NextResponse } from "next/server";
let helper = new Helper()
let controller = new Controller()


import Middleware from "@/lib/middleware"
const middleware = new Middleware();



export async function GET(req) {
    const mwareAccount = await middleware.check(req)
    // if (mwareAccount == false) {
    //     return new Response(helper.response(null, 401, 'Invalid Accessed.'));
    // }

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search)
    const id = searchParams.get('id')

    if (id) {
        if (mwareAccount) {
            // retrieve here with auth
            let result = await controller.retrieveFirstWithAccount({
                where: {
                    id: id
                }
            }, mwareAccount, true)
            result = result ? result : null
            return new NextResponse(helper.response(result, 200, null));
        } else {
            let result = await controller.retrieveFirst({
                where: {
                    id: id
                }
            }, true)
            result = result ? result : null
            return new NextResponse(helper.response(result, 200, null));
        }
    } else {
        const category = searchParams.get('category')
        if (category) {
            let result = await controller.retrieveByCondition({
                where: {
                    category: category
                },
                orderBy: {
                    name: 'asc'
                }
            })
            return new NextResponse(helper.response(result, 200, null));
        } else {
            let result = await controller.retrieveHome(mwareAccount)
            let response = {
                featured: result ? result[0] : null,
                categories: null
            }
            return new NextResponse(helper.response(response, 200, null));
        }
    }
}