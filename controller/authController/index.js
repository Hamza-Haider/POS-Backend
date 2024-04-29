import Jwt from "jsonwebtoken"

import bcrypt from "bcrypt"
import userModel from "../../Model/userModel/index.js"
const authController = {
  login: async (req, res) => {
    const payload = req.body
    const user = await userModel.findOne({
      where: {
        Email: payload.Email,
      },
    })
    if (!user) {
      return res.status(401).json({
        message: "invalid credentional",
      })
    }
    const hpassword = user.Password
    const password = payload.Password
    const result = await bcrypt.compare(password, hpassword)
    console.log(result, "this is a result")

    if (!result) {
      return res.status(401).json({
        message: "invalid credentional",
      })
    }

    const data = {
      id: user.id,
      Email: user.Email,
      name: user.firstName + " " + user.lastName,
    }

    const token = Jwt.sign(
      {
        //exp: Math.floor(Date.now() / 1000) + (60 * 60),
        ...data,
      },
      "secret",
      { expiresIn: "1h" }
    )

    res.json({
      message: "user logged in",
      data,
      token,
    })
  },

  register: async (req, res) => {
    try {
      // const payload = req.body
      // if (!req.user.isAdmin) {
      //   return res
      //     .status(403)
      //     .json({ error: "Only admins can register new users" })
      // }
      const password = await bcrypt.hash(payload.Password, 10) // Hash the password with salt rounds
      const user = await userModel.create({
        firstName: payload.firstName,
        lastName: payload.lastName,
        Email: payload.Email,
        Password: password, // Store the hashed password
        isAdmin:  false
      })
      res.json({
        message: "User registered successfully",
        user,
      })
    } catch (error) {
      res.status(500).json({ error: "Failed to register user" })
    }
  },
}
export default authController
