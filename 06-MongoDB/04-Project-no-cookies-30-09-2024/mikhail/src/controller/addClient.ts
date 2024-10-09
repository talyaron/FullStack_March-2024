
import { ClientModel } from "../model/clientmodel";
export async function addClient(req: any, res: any) {
    try {
       
        const { firstName, lastName, email, password, dateOfBirth, country,displayName } = req.body;
        if (!firstName || !lastName || !email || !password|| !dateOfBirth|| !country|| !displayName) {
            return res.status(400).send({ error: "missing data" })
        }
        const newClient = new ClientModel({ firstName, lastName, email, password, dateOfBirth,country,displayName });
        await newClient.save()

        const clients = await ClientModel.find();
        res.send({ message: "ok" });
    } catch (error: any) {
        console.error(error);

    }
  
}