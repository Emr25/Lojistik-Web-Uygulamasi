const router = require("express").Router()

const {get_all,get_single,post_data,update_data,delete_data}=require("../controllers/logController")

router.post("/",post_data)
router.get("/",get_all)
router.get("/:id",get_single)
router.put("/:id",update_data)
router.delete("/:id",delete_data)

module.exports=router