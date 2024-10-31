const UserModel = require('../models/User')

module.exports.getUsers =  (req,res) =>{
    
    // const age = req.body.age

    // UserModel.find(age ? { age: Number(age) } : {})
    UserModel.find({})
    .then((users) =>res.json(users))
    .catch((err)=> console.log(err))
}

module.exports.addUser = async (req,res) =>{

    const user = req.body
    UserModel.create(user)
    .then((result) => {
        // console.log(result)
    })
    .catch((err) => {console.log(err)})
}

module.exports.delUser = async (req,res) =>{

    const {_id} = req.body
    
    UserModel.findByIdAndDelete(_id)
    .then((result) => {res.json(result)})
    .catch((err) => {console.log(err)})
}

