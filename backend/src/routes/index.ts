import express from "express"
import authRouter from "./authRoutes/index"

const router = express.Router()

router.use("/auth", authRouter)

export default router