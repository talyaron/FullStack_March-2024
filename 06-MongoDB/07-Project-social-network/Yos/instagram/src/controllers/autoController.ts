import { User } from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req: any, res: any) => {
  try {
    console.log(req.body);
    const { username, email, password, firstName, lastName, bio } = req.body;
    const profilePicture = req.file ? req.file.path : null;

    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(400).send('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      bio,
      profilePicture
    });

    await user.save();
    res.status(201).json(user);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req: any, res: any) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, "your_jwt_secret", {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};