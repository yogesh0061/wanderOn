
import express from "express"
import signupRouter from "./signup"
import signInRouter from "./signIn"
import verifyTokenRouter from "./verifyToken"

const authRouter = express.Router()

authRouter.use("/signup", signupRouter)
authRouter.use("/signin", signInRouter)
authRouter.use("/verifyToken", verifyTokenRouter)

export default authRouter;