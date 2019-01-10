import ApplicationError from './error';

const HEADERS = {
    'Content-type': 'application/json',
    'Accept': 'application/json'  
};

const callServer = async (url, method, data, status=200) => {
    let request = {
        method: method,
        headers: HEADERS
    };
    if (method === 'POST' || method === 'PATCH' || method === 'PUT') {
        request.body = JSON.stringify(data);
    }
    const response = await fetch(url, request);
    const content = await response.json();
    if (response.status != status) {
        throw new ApplicationError(content.error);
    }
    return content;
}

const Server = {
    getInfo: async () => await callServer(`/_api/info`, 'GET', undefined, 200)
};

export default Server;