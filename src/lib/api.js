export default class Api {
    async post(url, data, token, callback, errorCallback) {
        if(!token){
            return
        }
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
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

    async postRegister(url, data, callback, errorCallback){
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
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

    async patch(url, data, token, callback, errorCallback) {
        if(!token){
            return
        }

        const fetchOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
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

    async get(url, token, callback, errorCallback) {
        if(!token){
            return
        }
        const fetchOptions = {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
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