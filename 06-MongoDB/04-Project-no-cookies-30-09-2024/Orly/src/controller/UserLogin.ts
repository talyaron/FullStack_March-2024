import express, {Request, Response} from 'express';
import { UserModel } from '../model/UserModel';
import {crypto} from 'crypto';

const router = express.Router();

const hashPassword = (password: string): string => {
return crypto.createHash('sha256').update(password).digest('hex');
};

//Register route

export async function RegisterUser(req: any, res:any ) {
    const{ username, password} = req.body;

    try {
        const existingUser = await UserModel.findOne({username});
        if(existingUser){
            return res.status(400).json({msg:'Username already taken'});
        }

        const hashedPassword = hashPassword(password);

        const newUser = new UserModel({username, password: hashedPassword});
        await newUser.save();

        res.status(201).json({msg:'User registered successfully'})
    } catch (err) {
        res.status(500).json({msg:'Server error'});
    }
};

//login route

export async function UserLogin(req:Request, res: Response) {
    const{username, password} = req.body;

    try {
        const user = await UserModel.findOne({username});
        if(!user || user.password !== hashPassword(password)){
            return res.status(400).json({msg:'Invalid credentials'});
        }

        req.session.user = user;
        res.json({msg: 'Login successful', user})
    } catch (err) {
        res.status(500).json({msg:'Server error'})
    }
};
