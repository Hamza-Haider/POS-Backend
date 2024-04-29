import express, { json } from "express"
import cors from 'cors'
import { ConnectDB } from "./DB/config.js"

import initDb from "./DB/initDB.js"
import itemRoutes from "./Routes/itemRoutes/index.js"
import transactionRoutes from "./Routes/TransactionRoutes/index.js"
import authRoutes from "./Routes/authRoutes/authRoutes.js"



const app = express()
app.use(cors())
ConnectDB()
initDb().then(() => console.log("db synced"))
app.use(json())
app.use(itemRoutes)
app.use(authRoutes)
app.use(transactionRoutes)

app.listen(5000, () => {
  console.log(`Example app listening on port:5000`)
})
