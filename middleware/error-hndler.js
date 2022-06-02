const errorHandlerMiddleware = (err,req,res,next) =>{
            return res.status(500).json({msg:"something went wrong try again",err})
}

module.exports = errorHandlerMiddleware