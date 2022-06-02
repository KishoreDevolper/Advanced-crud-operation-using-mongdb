const usermodel = require("../models/user.model")

const asyncWrapper = require("../middleware/ayncwrapper.middleware")

const createUser = async (req,res)=>{
    try {
        const user = await usermodel.create(req.body)
        res.status(201).json({user})
        
    } catch (error) {
        res.status(500).json({error})
        
    }
}
const getallUser = asyncWrapper(async (req,res)=>{

        const all = await usermodel.find({})
        res.status(200).json({all})
   
})
const getSingleUser = asyncWrapper(async (req,res)=>{
        const {id:userID} = req.params
        const singleuser = await usermodel.findById({_id:userID});
       if(!singleuser){
        const error = new Error("not found")
        return res.status(404).json({ msg:`there is no user with this ${userID}` })

        }
       res.status(200).json({singleuser})
        
    
})

const updateUser = async (req,res)=>{
    try {
        const {id:userID} = req.params
        const update = await usermodel.findOneAndUpdate({_id:userID},req.body,{
            new:true,
            runValidators:true
        })
        if(!update) res.status(404).json(`invalid user ${userID}`)
        res.status(200).json({update})
    } catch (error) {
        res.status(500).json({error})
    }
}
const DeleteUser = async (req,res)=>{
    try {
        const {id:userID} = req.params
        const deluser = await usermodel.findByIdAndDelete({_id:userID})
        if(!deluser) {res.status(404).json(`invalid user id ${userID}`)}
        res.status(200).json({deluser})

    } catch (error) {
        res.status(500).json({error})
        
    }
}
module.exports={
    createUser,updateUser,DeleteUser,getallUser,getSingleUser

}