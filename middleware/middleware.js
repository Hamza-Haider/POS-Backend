import jwt from "jsonwebtoken"
import userModel from "../Model/userModel/index.js"
const AuthMiddleware = async (req, res, next) => {
  const headers = req.headers
  console.log(headers, "headers")
  let token = headers.authorization
  console.log(token, "token")

  token = token.split(" ")
  console.log(token, "token")

  token = token[1]
  console.log(token, "token")

  try {
    let decoded = jwt.verify(token, "secret")
    // const user = await userModel.findOne({ where: { id: decoded.id } })

    // if (!user || !user.isAdmin) {
    //   return res.status(403).json({ error: "Unauthorized access" })
    // }

    req.user = decoded
    console.log(req.user, "this is a anthouris")
  } catch (err) {
    console.log(err)

    return res.status(401).json({
      message: "Invalid token - please login again",
    })
  }

  next()
}

export default AuthMiddleware
