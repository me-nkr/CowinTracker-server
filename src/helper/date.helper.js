const newIndianDateString = (dateData = new Date()) => {
    return new Date(dateData).toLocaleString(
        'en-US',
        {timeZone: 'Asia/Kolkata'}
    )
} ;

const newDateString = (dateString) => {
    const [date, month, year] = dateString.split(
        (dateString => {
            if (/^.{1,2}[\-].{1,2}[\-].{4}/g.test(dateString)) return '-' ;
            else if (/^.{1,2}[\/].{1,2}[\/].{4}/g.test(dateString)) return '/' ;
            else return false ;
        })(dateString)
        )
    return `${year}-${month}-${date}` ;
} ;

const currentIndianDateString = dateData => {
    const [month, date, year] = newIndianDateString(dateData).split(',')[0].split('/')
    return `${date}/${month}/${year}` ;
} ;

const ifTimeElapsed = (dateString, compareWith) => {
    return new Date(newDateString(dateString)).setHours(23,59,59) < new Date(newIndianDateString(compareWith)) ;
} ;

module.exports = {
    currentIndianDateString,
    ifTimeElapsed
} ;

