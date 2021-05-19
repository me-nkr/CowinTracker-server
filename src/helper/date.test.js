const {currentIndianDateString, ifTimeElapsed} = require('./date.helper') ;

test('currentIndianDateString() should return IST date in dd/mm/yyyy format', () => {
    const [month, date, year] = new Date().toLocaleString(
        'en-US',
        {timeZone: 'Asia/Kolkata'}
    ).split(',')[0].split('/')
    expect(currentIndianDateString()).toBe(`${date}/${month}/${year}`) ;
})

test('currentIndianDateString() should return 05/08/2000', () => {
    expect(currentIndianDateString('2000-08-05')).toBe('5/8/2000') ;
})

test('should return true', () => {
    expect(ifTimeElapsed('05-08-2000', '2000-08-06')).toBe(true) ;
})

test('should return false', () => {
    expect(ifTimeElapsed('05-08-2000', '2000-08-04')).toBe(false) ;
})