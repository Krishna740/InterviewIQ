import express from "express"
import isAuth from "../middlewares/isAuth.js"
import { createOrder, verifyPayment, claimFreeCredits } from "../controllers/payment.controller.js"



const paymentRouter = express.Router()

paymentRouter.post("/order" , isAuth , createOrder )
paymentRouter.post("/verify" , isAuth , verifyPayment )
paymentRouter.post("/claim-free-credits" , isAuth , claimFreeCredits )


export default paymentRouter