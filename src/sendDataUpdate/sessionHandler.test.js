// input : updated data with details.
// output : - update database
//          - send update to client updater using events.

const EventEmitter = require('events') ;
const emitter = new EventEmitter() ;

const centersModel = require('./centersHandler.model')
jest.mock('./centersHandler.model')

const {sendInitial} = require('./sessionHandler.service') ;

describe('Reading and Sending initial data', () => {

    const handler = jest.fn() ;
    emitter.once('initialize', handler) ;

    sendInitial(emitter, centersModel) ;

    test('should emit "initialize" event', () => {
        expect(handler).toBeCalledTimes(1) ;
    }) ;

    test('should pass a value to callback function', () => {
        expect(handler.mock.calls.every(call => call.length)).toBeTruthy() ;
    }) ;

    test('should pass an object to callback function', () => {
        expect(handler.mock.calls.every(call => call.length && call.every(arg => typeof arg === 'object'))).toBeTruthy() ;
    }) ;

    test('should throw "dbmodel Undefined" Error', async () => {
        await expect(() => sendInitial(emitter)).rejects.toThrow('dbmodel Undefined') ;
    }) ;

    describe('Result data schema', () => {
        test('should have operationType property with value "initialize"', () => {
            expect(handler.mock.calls.every(call => call.every(({operationType}) => operationType && operationType === 'initialize'))).toBeTruthy() ;
        }) ;

        test('should have data property with an object as value', () => {
            expect(handler.mock.calls.every(call => call.every(({data}) => data && typeof data === 'object'))).toBeTruthy() ;
        }) ;

    }) ;
}) ;

describe('Create center', () => {

}) ;

describe('Create session', () => {

}) ;

describe('Update session', () => {

}) ;

describe('Delete session', () => {

}) ;