import { Router } from "express";
import transactionController from "../../controller/TransactionController/index.js";

const transactionRoutes=Router()
transactionRoutes.get('/getTransaction',transactionController)
export default transactionRoutes;