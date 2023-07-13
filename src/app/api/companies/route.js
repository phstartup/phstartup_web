import Model from "@/controllers/company"
import Helper from "@/lib/helper";
import { NextResponse } from "next/server";
let helper = new Helper()
let model = new Model()


import Middleware from "@/lib/middleware"
const middleware = new Middleware();



export async function GET(req){
    const mwareAccount = await middleware.check(req)
    if(mwareAccount == false){
      return new Response(helper.response(null, 401, 'Invalid Accessed.'));
    }



    return new NextResponse(helper.response({
        hello: 'word'
    }, 200, null));
}

export async function POST(req) {
    const mwareAccount = await middleware.check(req)
    if(mwareAccount == false){
      return new Response(helper.response(null, 401, 'Invalid Accessed.'));
    }


    const body = await req.json()

    const { name, description, website, email, industries, contact_number, employees} = body
    if(body.id){
        // update
        let result = await model.create(
            {
                where: {
                    id: id
                }
            },
            {
            user_id: mwareAccount.id,
            name,
            industries,
            website,
            email,
            contact_number,
            employees,
            apps
        })
        return new NextResponse(helper.response(result, 200, null))
    }else if(user_id, name && description){
        // create
        let result = await model.create({
            user_id: mwareAccount.id,
            name,
            industries,
            website,
            email,
            contact_number,
            employees,
            apps
        })
        return new NextResponse(helper.response(result, 200, null))
    }
    return new NextResponse(helper.response(null, 200, null))

}