  
const a123Data = require('../../../../../model/a123-data')

const getDataHandler = async (ctx) => {
    
    const myData = await a123Data.getData()
    ctx.body = myData
    ctx.status = 200
    // console.log('serve data complete')
    
}

module.exports = {
    getDataHandler
}