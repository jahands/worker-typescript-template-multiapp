export async function handleExample(event: FetchEvent): Promise<Response> {
    let request = event.request
    return new Response(`request method: ${request.method}`)
}
