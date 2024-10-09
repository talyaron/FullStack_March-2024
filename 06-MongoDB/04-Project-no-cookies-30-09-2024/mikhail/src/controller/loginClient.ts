
import { ClientModel } from "../model/clientmodel";
export async function loginClient(req: any, res: any) {
    try {
       
        const { email, password} = req.body;
        if (!email || !password) {
            return res.status(400).send({ error: "missing login data" })
        }
       
       

        const clients = await ClientModel.find();
        res.send({ message: "ok" });
    } catch (error: any) {
        console.error(error);

    }
  
}