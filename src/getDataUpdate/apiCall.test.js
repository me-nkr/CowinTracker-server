const {apiCall} = require('./apiCall.service') ;



describe('API caller', () => {

    const auth = 'https://helloworld.com/Auth' ;
    const noAuth = 'https://helloworld.com/noAuth' ;
    const notFound = 'https://helloworld.com/notFound' ;
    const parameters = {
        id: 303,
        date: '30-03-2392'
    } ;

    describe('On Result', () => {
        test('should return a value', () => {
            const result = apiCall(auth, parameters) ;
            expect(result).toBeTruthy() ;
        }) ;

        test('should return an object', () => {
            const result = apiCall(auth, parameters) ;
            expect(typeof result).toBe('object') ;
        }) ;
    })

    describe('On Error', () => {
        test('should throw Forbidden error only', async () => {
            await expect(apiCall(noAuth, parameters)).rejects.toThrow(/403/g);
            await expect(apiCall(noAuth, parameters)).rejects.not.toThrow(/404/g);
        }) ;

        test('should throw notFound error only', async () => {
            await expect(apiCall(notFound, parameters)).rejects.toThrow(/404/g) ;
            await expect(apiCall(notFound, parameters)).rejects.not.toThrow(/403/g) ;
        }) ;
    })
}) ;