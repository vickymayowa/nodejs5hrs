// router expres 

const express = require("express")
const router = express()
const { login , getUsers } = require("../controllers/userController.js")


router.post("/login", login)
router.get("/getUsers", getUsers)


module.exports = router