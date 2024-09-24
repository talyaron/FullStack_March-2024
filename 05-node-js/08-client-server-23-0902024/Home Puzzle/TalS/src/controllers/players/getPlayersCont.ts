import { Player, players } from "../../models/firstTeamModel";

export function getAllPlayers(req:any, res:any){
    try {
        res.send({players:players})
    } catch (error) {
        console.error(error);
    }
}