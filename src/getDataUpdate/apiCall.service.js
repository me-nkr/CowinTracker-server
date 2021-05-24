const got = require('got') ;

const apiCall = async (url, parameters) => {
    try{
        const {body} = await got(url, {
            searchParams: parameters,
            responseType: 'json'
        }) ;
        return body ;
    }
    catch(error) {
        throw new Error(error.message) ;
    }
}

module.exports = {apiCall} ;