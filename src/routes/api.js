const express = require('express')
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")
const ProfileController = require("../controllers/ProfileController")
const ToDoListController = require("../controllers/ToDoListController")

const router = express.Router()


router.post("/CreateProfile",ProfileController.CreateProfile)
router.post("/UserLogin",ProfileController.UserLogin)

router.get("/SelectProfile",AuthVerifyMiddleware,ProfileController.SelectProfile)
router.post("/UpdateProfile",AuthVerifyMiddleware,ProfileController.UpdateProfile)

router.post("/CreateToDo",AuthVerifyMiddleware,ToDoListController.CreateToDo)
router.get("/SelectToDo",AuthVerifyMiddleware,ToDoListController.SelectToDo)
router.post("/UpdateToDo",AuthVerifyMiddleware,ToDoListController.UpdateToDo)
router.post("/UpdateStatusToDo",AuthVerifyMiddleware,ToDoListController.UpdateStatusToDo)
router.post("/DeleteToDo",AuthVerifyMiddleware,ToDoListController.DeleteToDo)
router.post("/DeleteToDo",AuthVerifyMiddleware,ToDoListController.DeleteToDo)
router.post("/SelectToDoByStatus",AuthVerifyMiddleware,ToDoListController.SelectToDoByStatus)
router.post("/SelectToDoByDate",AuthVerifyMiddleware,ToDoListController.SelectToDoByDate)




module.exports = router;