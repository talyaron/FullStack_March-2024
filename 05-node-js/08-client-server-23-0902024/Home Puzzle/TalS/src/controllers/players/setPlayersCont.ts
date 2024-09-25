import { Player, players } from "../../models/firstTeamModel";

// add-player:
export function addPlayer(req: any, res: any) {
  try {
    const { name, position, number, nationality, imageUrl } = req.body;
    if (!name || !position || !imageUrl || !number || !nationality) {
      return res.status(400).send("Missing data");
    }
    const newPlayer = new Player(name, position, number, nationality, imageUrl);
    players.push(newPlayer);
    res.status(200).send({ newPlayer, ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

// update-player:

interface playerUpdate {
  name?: string;
  position?: string;
  number?:number;
  nationality?: string;
  imageUrl?: string;
}
export function updatePlayer(req: any, res: any) {
  try {
    const { playerId } = req.body;
    const updatePlayer: playerUpdate = req.body;

    if (!playerId) {
      return res.status(400).json({ ok: false, error: "missing player id" });
    }

    const playerIndex = players.findIndex((p) => p.playerId === playerId);
    if (playerIndex === -1) {
      return res.status(400).json({ ok: false, error: "player not found" });
    }

    const player = players[playerIndex];

    const setters: { [key in keyof playerUpdate]?: (value:any) => void} = {
        name:(value) => player.setName(value),
        position: (value) => player.setPosition(value),
        number: (value) => player.setNumber(value),
        nationality: (value) => player.setNationality(value),
        imageUrl: (value) => player.setImageUrl(value),
    };

    Object.keys(updatePlayer).forEach(field => {
        if (field in setters && updatePlayer[field as keyof playerUpdate] !== undefined) {
          setters[field as keyof playerUpdate]?.(updatePlayer[field as keyof playerUpdate]);
        }
      });

      res.status(200).json({ ok: true, message: "Player updated successfully", player });

    } catch (error: any) {
      console.error(error);
      res.status(500).json({ ok: false, error: error.message });
    }
  }
