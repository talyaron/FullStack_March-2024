import { request, Response } from "express";
export function login(req: Request, res:Response){
    try {
        const {username, password} = req.body
        res.status(200).send({username, password})
    } catch (error) {
        console.error(error)
        res.status(500).send({error})
    }
}

export function register(req: Request, res:Response){
    try {
        const {username, password} = req.body
        res.status(200).send({username, password})
    } catch (error) {
        console.error(error)
        res.status(500).send({error})
    }
}