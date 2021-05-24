const {handleResponse} = require('./handleResponse.service')
const EventEmitter = require("events");
const emitter = new EventEmitter() ;

describe('Response Handler', () => {

    const testData = [
        {
            center_id: 612208,
            name: "Desamangalam FHC",
            address: "Cheruthuruthy Rd, Desamangalam, Kerala",
            state_name: "Kerala",
            district_name: "Thrissur",
            block_name: "Erumapetty CHC",
            pincode: 679532,
            lat: 10,
            long: 76,
            from: "09:00:00",
            to: "13:00:00",
            fee_type: "Free",
            sessions: [
                {
                session_id: "73e3d03e-9a0f-45c0-a43e-369e847e59f3",
                date: "24-05-2021",
                available_capacity: 0,
                min_age_limit: 45,
                vaccine: "COVISHIELD",
                slots: [
                    "09:00AM-10:00AM",
                    "10:00AM-11:00AM",
                    "11:00AM-12:00PM",
                    "12:00PM-01:00PM"
                ],
                available_capacity_dose1: 0,
                available_capacity_dose2: 0
                }
            ]
        },
        {
        center_id: 134200,
        name: "Porathissery PHC",
        address: "Porathissery P OPorathissery",
        state_name: "Kerala",
        district_name: "Thrissur",
        block_name: "Anandapuram CHC",
        pincode: 680125,
        lat: 10,
        long: 76,
        from: "09:00:00",
        to: "13:00:00",
        fee_type: "Free",
        sessions: [
            {
            session_id: "50fa30b8-e2f9-4fe1-acca-bd0f7aee9efc",
            date: "24-05-2021",
            available_capacity: 0,
            min_age_limit: 45,
            vaccine: "COVISHIELD",
            slots: [
                "09:00AM-10:00AM",
                "10:00AM-11:00AM",
                "11:00AM-12:00PM",
                "12:00PM-01:00PM"
            ],
            available_capacity_dose1: 0,
            available_capacity_dose2: 0
            }
        ]
        },
        {
        center_id: 612398,
        name: "Kaipamangalam PHC",
        address: "Kaipamangalam",
        state_name: "Kerala",
        district_name: "Thrissur",
        block_name: "Perinjanam CHC",
        pincode: 680681,
        lat: 0,
        long: 0,
        from: "09:00:00",
        to: "13:00:00",
        fee_type: "Free",
        sessions: [
            {
            session_id: "3304c71f-9297-4fef-b7f0-f6b197d3080c",
            date: "24-05-2021",
            available_capacity: 0,
            min_age_limit: 45,
            vaccine: "COVISHIELD",
            slots: [
                "09:00AM-10:00AM",
                "10:00AM-11:00AM",
                "11:00AM-12:00PM",
                "12:00PM-01:00PM"
            ],
            available_capacity_dose1: 0,
            available_capacity_dose2: 0
            }
        ]
        },
        {
        center_id: 134213,
        name: "Vallathol Nagar PHC",
        address: "Cheruthuruthy P OVallathole Nagar",
        state_name: "Kerala",
        district_name: "Thrissur",
        block_name: "Thirivilwamala CHC",
        pincode: 679531,
        lat: 10,
        long: 76,
        from: "09:00:00",
        to: "13:00:00",
        fee_type: "Free",
        sessions: [
            {
            session_id: "d0c2cc27-01c2-43ae-ade3-9de0dfc0220f",
            date: "24-05-2021",
            available_capacity: 0,
            min_age_limit: 45,
            vaccine: "COVISHIELD",
            slots: [
                "09:00AM-10:00AM",
                "10:00AM-11:00AM",
                "11:00AM-12:00PM",
                "12:00PM-01:00PM"
            ],
            available_capacity_dose1: 0,
            available_capacity_dose2: 0
            }
        ]
        }
    ] ;

    test('should call callback 4 times', () => {
        const handler = jest.fn() ;
        emitter.on('updatedData', handler) ;

        handleResponse(emitter, testData) ;

        expect(handler).toBeCalledTimes(4) ;
    }) ;
    
    test('should pass only object to callback', () => {
        const handler = jest.fn() ;
        emitter.on('updatedData', handler) ;

        handleResponse(emitter, testData) ;

        expect(handler.mock.calls.every(call => call.every(arg => typeof arg === 'object'))).toBeTruthy() ;
    }) ;

    describe('Result Data Schema', () => {
        const handler = jest.fn() ;
        emitter.on('updatedData', handler) ;

        handleResponse(emitter, testData) ;

        test('should have property center_id(number) in object pased to callback', () => {
            
            expect(handler.mock.calls.every(call => call.every(({center_id}) => center_id && typeof center_id === 'number' ))).toBeTruthy() ;
        })

        test('should have property name(string) in object pased to callback', () => {
            expect(handler.mock.calls.every(call => call.every(({name}) => name && typeof name === 'string' ))).toBeTruthy() ;
        })

        test('should have property address(string) in object pased to callback', () => {
            expect(handler.mock.calls.every(call => call.every(({address}) => address && typeof address === 'string' ))).toBeTruthy() ;
        })

        test('should have property district_name(string) in object pased to callback', () => {
            expect(handler.mock.calls.every(call => call.every(({district_name}) => district_name && typeof district_name === 'string' ))).toBeTruthy() ;
        })

        test('should have property state_name(string) in object pased to callback', () => {
            expect(handler.mock.calls.every(call => call.every(({state_name}) => state_name && typeof state_name === 'string' ))).toBeTruthy() ;
        })

        test('should have property pincode(number) in object pased to callback', () => {
            expect(handler.mock.calls.every(call => call.every(({pincode}) => pincode && typeof pincode === 'number' ))).toBeTruthy() ;
        })

        test('should have property fee_type(string) in object pased to callback', () => {
            expect(handler.mock.calls.every(call => call.every(({fee_type}) => fee_type && typeof fee_type === 'string' ))).toBeTruthy() ;
        })

        test('should have property sessions(array) in object pased to callback', () => {
            expect(handler.mock.calls.every(call => call.every(({sessions}) => sessions && sessions instanceof Array ))).toBeTruthy() ;
        })

        test('should not have any other properties other than the above ones in object pased to callback', () => {
                const keys = [
                    'center_id',
                    'name',
                    'address',
                    'district_name',
                    'state_name',
                    'pincode',
                    'fee_type',
                    'sessions'
                ] ;

                expect(handler.mock.calls.every(call => call.every(center => Object.keys(center).every(key => keys.includes(key))))).toBeTruthy() ;
        }) 

        describe('Sessions Array Schema', () => {
            
            test('should have session_id(string) property in every obect in seeions array', () => {
                expect(handler.mock.calls.every(call => call.every(({sessions}) => sessions.every(({session_id}) => session_id && typeof session_id === 'string')))).toBeTruthy() ;
            })

            test('should have date(string) property in every obect in seeions array', () => {
                expect(handler.mock.calls.every(call => call.every(({sessions}) => sessions.every(({date}) => date && typeof date === 'string')))).toBeTruthy() ;
            })

            test('should have availavle_capacity_dose1(number) property in every obect in seeions array', () => {
                expect(handler.mock.calls.every(call => call.every(({sessions}) => sessions.every(({available_capacity_dose1}) => (available_capacity_dose1 === 0 || available_capacity_dose1) && typeof available_capacity_dose1 === 'number')))).toBeTruthy() ;
            })

            test('should have availavle_capacity_dose2(number) property in every obect in seeions array', () => {
                expect(handler.mock.calls.every(call => call.every(({sessions}) => sessions.every(({available_capacity_dose2}) => (available_capacity_dose2 === 0 || available_capacity_dose2) && typeof available_capacity_dose2 === 'number')))).toBeTruthy() ;
            })

            test('should have min_age_limit(number) property in every obect in seeions array', () => {
                expect(handler.mock.calls.every(call => call.every(({sessions}) => sessions.every(({min_age_limit}) => min_age_limit && typeof min_age_limit === 'number')))).toBeTruthy() ;
            })

            test('should have vaccine(string) property in every obect in seeions array', () => {
                expect(handler.mock.calls.every(call => call.every(({sessions}) => sessions.every(({vaccine}) => vaccine && typeof vaccine === 'string')))).toBeTruthy() ;
            })

            test('should not have any property other than above in any obect in sessions array', () => {
                const keys = [
                    'session_id',
                    'date',
                    'available_capacity_dose1',
                    'available_capacity_dose2',
                    'min_age_limit',
                    'vaccine'
                ] ;

                expect(handler.mock.calls.every(call => call.every(({sessions}) => sessions.every(session => Object.keys(session).every(key => keys.includes(key)))))).toBeTruthy() ;
            })
        })
    })
}) ;
