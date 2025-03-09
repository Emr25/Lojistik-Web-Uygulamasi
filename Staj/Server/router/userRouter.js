const router = require("express").Router()
const {post_signup,get_user,post_login,get_logout}=require("../controllers/userController")

router.get("/login",get_user)
router.post("/register",post_signup)
router.post("/login",post_login)
router.post("/logout",get_logout)

module.exports=router