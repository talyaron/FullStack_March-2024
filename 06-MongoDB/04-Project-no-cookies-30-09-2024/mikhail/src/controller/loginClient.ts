
import { ClientModel } from "../model/clientmodel";
export async function loginClient(req: any, res: any) {
    try {
       
        const { email, password} = req.body;
        if (!email || !password) {
            return res.status(400).send({ error: "missing login data" })
        }
        const client = await ClientModel.findOne({ email, password });

        // If no client is found, send an error response
        if (!client) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // If a client is found, login is successful
        res.json({ message: "Login successful", client: { email: client.email, displayName: client.displayName } });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ error: "An error occurred during login" });
    }
  
}