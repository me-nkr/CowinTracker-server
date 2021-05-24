module.exports = jest.fn((url, options) => {
    switch(url.split('/').slice(-1)[0]) {
        case 'Auth' :
            return Promise.resolve({
                status: 200,
                body: {
                    centers: []
                }
            }) ;
        case 'noAuth' :
            return Promise.reject(new Error('403 Forbidden')) ;
        case 'notFound' :
            return Promise.reject(new Error('404 Not Found')) ;
    }
})