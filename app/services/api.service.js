import config from 'config';
import qs from "query-string"
//action: GET,PUT.. path: /topics/34.. 
export function mainApi({method, path=[], body={}, query={} }) { 
    const requestOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        // body: method !== "GET" && JSON.stringify({ body })
    };
    // /structure/depth, 
    const urlString = `${config.apiUrl}/${path.length > 0 ? path.join("/"): ""}${Object.keys(query).length > 0 ? "?" + qs.stringify(query): ""}`
    console.log(urlString)
    return fetch(urlString, requestOptions)
        .then(handleResponse)
        .then((res)=>res)
}

function handleResponse(response) {
    return response.json().then(data => {
        if (!response.ok) {
            const error = (data && data.error) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}