import { User } from "../../model/userModel";

export async function addUser(req: any, res: any) {
    try {
        console.log(req.body);
        const { name, email, password } = req.body;

        //check if all fields are filled
        if (!name || !email || !password) throw new Error("missing info");

        //check if user exists
        const user = await userExists(email);
        console.log(user);
        if (user) throw new Error("User already exists");

        const newUser = new User({ name, email, password  });

        await newUser.save();
        res.send({ ok: true, newUser });
    } catch (error: any) {
        console.error(error);
        res.send({ ok: false, error: error.message });
    }
}


//check if user exists
const userExists = async (email: string) => {
    const user = await User.find({ email: email });
    return user;
}