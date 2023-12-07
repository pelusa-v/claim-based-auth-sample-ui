class RestClient {

    public static makeRequest(url : string, method : RestMethod, body : any, params? : URLSearchParams, customHeaders? : Headers) : Promise<Response> {

        if(customHeaders === undefined){
            customHeaders = new Headers()
            customHeaders.set('Content-Type', 'application/json')
            customHeaders.set('Accept', 'application/json')
        }

        if(params !== undefined){
            url += params;
        }

        var req = new Request(url, {
            method: method,
            body: body,
            headers: customHeaders,
        })

        return fetch(req)
            .then((res : Response) => {
                return res.json()
            })
    }
}

enum RestMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE= "DELETE",
}


export {RestClient, RestMethod}