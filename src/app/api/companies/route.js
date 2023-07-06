import Model from "@/models/company"
import Helper from "@/lib/helper";
import { NextResponse } from "next/server";
let helper = new Helper()
let model = new Model()
export async function GET(req){
    return new NextResponse(helper.response({
        hello: 'word'
    }, 200, null));
}

export async function POST(req) {
    const body = await req.json()

    const { user_id, name, description, website, email, industries, contact_number, employees} = body
    if(body.id){
        // update
        let result = await model.create(
            {
                where: {
                    id: id
                }
            },
            {
            user_id,
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
            user_id,
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