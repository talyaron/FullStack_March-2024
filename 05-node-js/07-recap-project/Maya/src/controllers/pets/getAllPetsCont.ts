import { pets } from '../../module/petModule';//+
export function getAllPets(req: any, res: any) {
    try {
res.send({pets: pets})
    } catch (error) {
        console.error(error);
    }
}