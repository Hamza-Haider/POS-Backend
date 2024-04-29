import { Router } from "express"
import authController from "../../controller/authController/index.js"


const authRoutes = Router()
authRoutes.post("/Login", authController.login)
authRoutes.post("/Register",  authController.register)
export default authRoutes
