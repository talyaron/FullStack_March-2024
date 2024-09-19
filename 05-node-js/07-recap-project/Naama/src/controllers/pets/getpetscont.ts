import {pets} from "../../model/petModel"

export function getallpets(req:any,res:any){
    try {
        res.send({pets});
    } catch (error) {
        console.error(error)
    }
}