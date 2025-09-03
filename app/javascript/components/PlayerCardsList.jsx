import React from "react";
import PlayerCardShort from "./PlayerCardShort";

const PlayerCardsList = ({players}) => {

    const playerElements = players.map((player) => {
        return (
            <PlayerCardShort key={player.id} player={player} />
        )
    })

    return (
        <div>
            {playerElements}
        </div>
    )
};

export default PlayerCardsList;