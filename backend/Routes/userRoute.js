//Lay ra doi tuong Router tu express
const {Router} = require("express");
const { addUser, getUsers, delUser} = require("../controllers/userController");

const router = Router()

router.get('/get',getUsers)
router.post('/add',addUser)
router.post('/del',delUser)

module.exports = router;