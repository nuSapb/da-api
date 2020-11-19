const config = require('../config')
const sql = require('mssql')

const getData = async () => {
    try{
        let pool = await sql.connect(config)
        let a123 = await pool.request().query("DECLARE	@return_value int EXEC	@return_value = [dbo].[QuerySample]")
        // console.log(a123.recordsets)
        return a123.recordsets
        
    }
    catch (err){
        console.error(err)
    }

}



module.exports = {
    getData
}