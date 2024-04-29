import { Router } from "express"
import itemController from "../../controller/itemController/index.js"
import AuthMiddleware from "../../middleware/middleware.js"
const itemRoutes = Router()
itemRoutes.get("/getAllItem", itemController.getAllItems)
itemRoutes.get("/getOneItem/:item_Id",itemController.getOneItem)
itemRoutes.post("/addItem", itemController.addItem)
itemRoutes.put("/updateItem/:item_Id", itemController.updateItem)
itemRoutes.delete("/deleteItem/:item_Id",itemController.deleteItem)
export default itemRoutes
