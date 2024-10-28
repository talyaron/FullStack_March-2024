import { User } from "../models/User";
import bcrypt from "bcryptjs";
import { console } from "inspector";
import jwt from "jsonwebtoken";

export const register = async (req: any, res: any) => {
  try {
    console.log(req.body);
    const { username, email, password, firstName, lastName } = req.body;
    const profilePicture = req.file ? req.file.path : null;
    console.log(profilePicture, username, email, password, firstName, lastName);

    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(400).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      profilePicture,
    });

    await user.save();
    res.status(201).json(user);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};


export async function login(req: any, res: any): Promise<void> {
  try {
    console.log("Login function called");
    console.log("Request body:", req.body);

    const { username, email, password } = req.body;
    console.log("Parsed request body:", { username, email, password });

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ error: "User not found" });
    }
    console.log("User found:", user);

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      console.log("Invalid credentials");
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, "your_jwt_secret", {
      expiresIn: "1h",
    });
    console.log("Token generated:", token);
    res.json({ token });
  } catch (err: any) {
    console.log("Error:", err.message);
    res.status(500).json({ error: err.message });
  }
}