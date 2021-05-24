const fieldExtractor = (fields, object) => {
        const data = {} ;
        fields.forEach(field => data[field] = object[field]) ;
        return data ;
    } ;

const handleResponse = (eventEmitter, centers) => centers.forEach(center => {
    // take only necessary fields from center object
    const data = fieldExtractor([
            'center_id',
            'name',
            'address',
            'district_name',
            'state_name',
            'pincode',
            'fee_type',
            'sessions'
    ], center)
    data.sessions = data.sessions.map(session => fieldExtractor([
        'session_id',
        'date',
        'available_capacity_dose1',
        'available_capacity_dose2',
        'min_age_limit',
        'vaccine'
    ], session))
    // take only necessary fields from sessions array elements

    eventEmitter.emit('updatedData', data) ;
}) ;

module.exports = {handleResponse}