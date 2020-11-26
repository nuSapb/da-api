  
const a123Data = require('../../../../../model/a123-data')

const getMergeDataHandler = async (ctx) => {
    try{
        const data = await a123Data.getAllProdTest()
        ctx.body = data
        ctx.status = 200 
   
    }
    catch(err){
        console.error(err)
    }

}

const getDataS2Handler = async (ctx) => {
    
    const myData = await a123Data.getDataS2()
    ctx.body = myData
    ctx.status = 200
    // console.log('serve data complete')
    
}

const getDataS3Handler = async (ctx) => {
    
    const myData = await a123Data.getDataS3()
    ctx.body = myData
    ctx.status = 200
}

const getDataS2TestDetailHandler = async (ctx) => {
    
    const myData = await a123Data.getDataS2TestDetail()
    ctx.body = myData
    ctx.status = 200
}

const getDataS3TestDetailHandler = async (ctx) => {
    
    const myData = await a123Data.getDataS3TestDetail()
    ctx.body = myData
    ctx.status = 200
}

module.exports = {
    getMergeDataHandler,
    getDataS2Handler,
    getDataS3Handler,
    getDataS2TestDetailHandler,
    getDataS3TestDetailHandler
}