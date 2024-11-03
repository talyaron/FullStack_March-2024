import { Street } from "../../models/streetModel";

export async function setStreet(req:any,res:any){
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).send({ error: "missing street name" });
        }
        const existingName = await Street.findOne({ name });
        if (existingName) {
            return res.status(400).send({ error: 'street name already exists' })
        }
        const street = new Street({ name });
        await street.save()
        res.status(200).send({ ok: true });
    } catch (error) {
        console.error(error)
        res.status(500).send(error);
    }
}