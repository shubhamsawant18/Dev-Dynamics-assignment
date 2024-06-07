
const ActivityData = require('../schema/schema');
const getData = async(req, res)=>{
    try{
        let data = await ActivityData.find();
    return res.status(200).json({
       
        data
    });
    }
    catch(e){
        return res.status(500).json({
           error: e
        });
    }
}


module.exports = {
    getData,
}