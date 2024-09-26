import { players } from "../../models/firstTeamModel";

export function getPlayersById(req: any, res: any) {
  try {
    const { playerId } = req.body;
    if (!playerId) throw new Error("Bad playerId");
    const playerIndex = players.findIndex((player) => player.playerId === playerId);
    if (playerIndex === -1) throw new Error("player not found");

    res.send(players[playerIndex]);
  } catch (error: any) {
    console.error(error);
    res.send({ ok: false, error: error.message });
  }
}
