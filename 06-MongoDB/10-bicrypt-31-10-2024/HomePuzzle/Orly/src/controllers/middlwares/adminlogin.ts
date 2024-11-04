
import express from 'express';
import { Request, Response } from 'express';
import admin from '../../model/admin/adminModel';
const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10;  


app.post('/admin/register', async (req: Request, res: Response) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      const newAdmin = new Admin({
        username: req.body.username,
        password: hashedPassword
      });
      await newAdmin.save();
      res.status(201).send("Admin registered successfully");
    } catch (error) {
      res.status(500).send("Error registering admin");
    }
  });

  app.post('/admin/login', async (req, res) => {
    try {
      const Admin = await admin.findOne({ username: req.body.username });
      if (admin && await bcrypt.compare(req.body.password, admin.password)) {
        res.status(200).send("Admin login successful");
      } else {
        res.status(401).send("Invalid admin credentials");
      }
    } catch (error) {
      res.status(500).send("Admin login error");
    }
  });