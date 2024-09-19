import express from 'express'
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("its working!");
})

export default router