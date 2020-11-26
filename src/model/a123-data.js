const config2 = require('../config2')
const config3 = require('../config3')
const sql = require('mssql')

const getAllProdTest = async () => {
    try{
        let pool = await sql.connect(config2)
        let a123 = await pool.request().query("SELECT * FROM [A123_FCT2_DBSync].[dbo].[UUTresults] WHERE Operator like '%KETL_Operator%' UNION ALL SELECT * FROM  [A123_FCT3_DBSync].[dbo].[UUTresults] WHERE Operator like '%KETL_Operator%' ")
        pool.close()
        // console.log(a123.recordsets)
        return a123.recordsets
    }
    catch (err){
        console.error(err)
    }
}

const getDataS2 = async () => {
    try{
        let pool = await sql.connect(config2)
        let a123 = await pool.request().query("select * from UUTresults where Operator like '%KETL_Operator%'")
        pool.close()
        // console.log(a123.recordsets)
        return a123.recordsets
    }
    catch (err){
        console.error(err)
    }
}

const getDataS3 = async () => {
    try{
        let pool = await sql.connect(config3)
        let a123 = await pool.request().query("select * from UUTresults where Operator like '%KETL_Operator%'")
        pool.close()
        // console.log(a123.recordsets)
        return a123.recordsets
        
    }
    catch (err){
        console.error(err)
    }
}

const getDataS2TestDetail = async () => {
    try{
        let pool = await sql.connect(config2)
        let a123 = await pool.request().query("DECLARE	@return_value int EXEC	@return_value = [dbo].[QueryTestDetail]")
        // pool.close()
        // console.log(a123.recordsets)
        return a123.recordsets
        
    }
    catch (err){
        console.error(err)
    }
}

const getDataS3TestDetail = async () => {
    try{
        let pool = await sql.connect(config3)
        let a123 = await pool.request().query("DECLARE	@return_value int EXEC	@return_value = [dbo].[QueryTestDetail]")
        // pool.close()
        // console.log(a123.recordsets)
        return a123.recordsets
        
    }
    catch (err){
        console.error(err)
    }
}



module.exports = {
    getDataS2,
    getDataS3,
    getDataS2TestDetail,
    getDataS3TestDetail,
    getAllProdTest
}