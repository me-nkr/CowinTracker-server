
const sendInitial = async (emitter, dbmodel) => {
    if (!dbmodel) throw new Error('dbmodel Undefined') ;

    const data = await dbmodel.read('centers') ;
    emitter.emit('initialize', {
        operationType: 'initialize',
        data: data
    }) ;
}

module.exports = {
    sendInitial,
}