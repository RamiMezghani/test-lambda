export const handler = (event: any) => {
    console.log(event)
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/json" },
      body: JSON.stringify({ message: "Hello from my Lambda node!" })
    }
  }