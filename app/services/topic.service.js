import config from 'config';

function serialize( obj ) {
    return '?'+Object.keys(obj).reduce(function(a,k){a.push(k+'='+encodeURIComponent(obj[k]));return a},[]).join('&')
}

//action: GET,PUT.. path: /topics/34.. 
export function topicApi({method,id, path=[], body={}, query={} }) { 
    const requestOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body })
    };
    // /structure/depth, 
    return fetch(`${config.apiUrl}/topics/${id && id + "/"}${path.join("/")}${query && "?" + serialize(query)}`, requestOptions)
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