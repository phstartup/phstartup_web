export default class Api {
    async post(url, data, callback, errorCallback) {
        const fetchOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...data
            })
        }
        fetch(url, fetchOptions).then(response => response.json()).then(json => {
            callback(json)
        }).catch(error => {
            if (errorCallback) {
                errorCallback(error)
            }
        })
    }

    async get(url, callback, errorCallback) {
        const fetchOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        fetch(url, fetchOptions).then(response => response.json()).then(json => {
            callback(json)
        }).catch(error => {
            if (errorCallback) {
                errorCallback(error)
            }
        })
    }
}