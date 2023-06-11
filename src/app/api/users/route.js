export async function GET(request){
    const users = [
        { id: 1, name: "Hello"},
        { id: 2, name: "Hello"},
        { id: 3, name: "Hello"},
    ]
    return new Response(JSON.stringify(users))
}