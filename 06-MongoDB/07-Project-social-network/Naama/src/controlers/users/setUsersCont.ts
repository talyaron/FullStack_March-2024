import { User } from "../../model/users/usersModel";
import { Request ,Response } from 'express';

export async function login(req:Request,res:Response){
    try {
        const {username,password} = req.body;

        res.status(200).send({username,password})
    } catch (error:any) {
        console.log(error);
        res.status(500).send(error.message)
    }
}

export async function register(req:Request,res:Response) {
    try {
        const { userName, email,password,pronounce,birthday} = req.body
        if (!userName ||!email ||!password||!pronounce||!birthday) throw new Error("Missing required fields")
        const user = new User({ userName, email,password,pronounce,birthday })
        await user.save()
        res.status(201).json(user)
    } catch (error: any) {
        console.log(error);
        res.status(500).send(error.message)
    }
}