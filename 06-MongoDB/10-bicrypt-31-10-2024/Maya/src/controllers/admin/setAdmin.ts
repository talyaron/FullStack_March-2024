import { Request, Response } from 'express';
import { Admin } from '../../model/admin/adminModel';
import jwt from 'jwt-simple';
import 'dotenv/config'
import bcrypt from 'bcrypt';

const secret = process.env.SECRET as string;

export async function registerAdmin(req: Request, res: Response) {
    try {
        const { email, password, name } = req.body;

        // Check if the admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).send({ error: 'Admin already exists' });
        }

        // Create and save the new admin
        const admin = new Admin({ email, password, name });
        await admin.save();

        res.status(201).send({ message: 'Admin registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Server error' });
    }
}

export async function loginAdmin(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        // Find the admin by email
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(401).send({ error: 'Invalid email or password' });
        }

        // Verify the password
        const isPasswordCorrect = await bcrypt.compare(password, admin.password);
        if (!isPasswordCorrect) {
            return res.status(401).send({ error: 'Invalid email or password' });
        }

        // Generate JWT token for admin
        const payload = {
            adminId: admin._id,
            email: admin.email,
            name: admin.name,
            role: 'admin'
        };
        const token = jwt.encode(payload, secret);

        // Send token as httpOnly cookie
        res.cookie('adminToken', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 });
        res.status(200).send({ message: 'Admin logged in successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Server error' });
    }
}