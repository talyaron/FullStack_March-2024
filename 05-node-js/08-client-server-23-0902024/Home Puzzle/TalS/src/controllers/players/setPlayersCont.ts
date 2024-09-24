import { Player, players } from "../../models/firstTeamModel";

export function addPlayer(req:any, res:any) {
    try {
        const {name, position, number, nationality, imageUrl} =req.body;
        if(!name|| !position|| !imageUrl|| !number|| !nationality){
            return res.status(400).send("Missing data")
        }
        const newPlayer = new Player(name, position,number,nationality,imageUrl);
        players.push(newPlayer);
        res.status(200).send({newPlayer,ok:true})
    }catch (error:any) {
        console.error(error);
        res.status(500).send(error.message)
    }
}