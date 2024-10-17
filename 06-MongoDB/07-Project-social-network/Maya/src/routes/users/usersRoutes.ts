import express from "express";
import { Request, Response } from 'express';
import { User } from '../../model/userModel';
import { getUser } from "../../controllers/users/getUser";

router.post("/login", login).post("/register", register).get("/getUser", getUser);


export default router;