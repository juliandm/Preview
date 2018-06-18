import config from 'config';



//action: GET,PUT.. path: /topics/34.. 
export function topicApi({method,id, path, data, search}) { 
    const requestOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data })
    };
    // /structure/depth, 
    return fetch(`${config.apiUrl}/topics/${id && id + "/"}${path.join("/")}${search}`, requestOptions)
        .then(handleResponse)
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