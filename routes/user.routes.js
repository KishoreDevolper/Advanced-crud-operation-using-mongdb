const express = require("express");

const router = express.Router();

const {createUser,getSingleUser,getallUser,updateUser,DeleteUser} = require("../controllers/user.controllers")

router.route('/',).get(getallUser).post(createUser);

router.route('/:id').patch(updateUser).delete(DeleteUser).get(getSingleUser);


module.exports= router;