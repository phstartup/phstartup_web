export async function GET(request) {
    const data = [
      {
        title: "Bag",
        value: 500,
        percentage: "80%",
        color: "bg-green-200",
      },
      {
        title: "Shoes",
        value: 40,
        percentage: "90%",
        color: "bg-red-100",
      },
    ]
    return new Response(JSON.stringify(data))
  }
  
  export async function POST(request) {
    const users = [
      { id: 1, name: "Hello" },
      { id: 2, name: "Hello" },
      { id: 3, name: "Hello" },
    ]
    return new Response(JSON.stringify(users))
  }
  
  export async function DELETE(request) {
    const users = [
      { id: 1, name: "Hello" },
      { id: 2, name: "Hello" },
      { id: 3, name: "Hello" },
    ]
    return new Response(JSON.stringify(users))
  }