import express from "express";
import { Request, Response } from 'express';
import { User } from '../../model/userModel';
import { getUser } from "../../controllers/users/getUser";
import { login } from "../../controllers/users/dist/login";
import { register } from "../../controllers/users/dist/
";

const router = express.Router();


router.post("/login", login).post("/register", register).get("/getUser", getUser);

export default router;
