import express from "express"
import signupRoouter from "./signup"
import signInRoouter from "./signIn"

const authRouter = express.Router()

authRouter.use("/signup", signupRoouter)
authRouter.use("/signin", signInRoouter)

export default authRouter;