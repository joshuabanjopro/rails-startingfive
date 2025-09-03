import React from "react";
import PointGuard from "../assets/point_guard.png"
import ShootingGuard from "../assets/shooting_guard.png"
import SmallForward from "../assets/small_forward.png"
import PowerForward from "../assets/power_forward.png"
import CenterForward from "../assets/center_forward.png"
import ScoringIcon from "../assets/scoring_icon.png"
import TeamIcon from "../assets/team_icon.png"
import PlaceHolderPlayer from "../assets/placeholder_player.png"
import AssistsIcon from "../assets/assists_icon.png"
import StealsIcon from "../assets/steals_icon.png"
import BlocksIcon from "../assets/blocks_icon.png"

const PlayerCard = ({player}) => {

    const positionImages = {
        "PG": PointGuard,
        "SG": ShootingGuard,
        "SF": SmallForward,
        "PF": PowerForward,
        "C": CenterForward
    }
    
    return (
        <div className="react-playercard">
            <img className="react-playercard-main-img" src={PlaceHolderPlayer} alt="" />
            <div className="react-playercard-content">
                <h2>{player.name}</h2>
                <div className="info-group">
                    <img src={positionImages[player.position]} alt="" />
                    <p>{player.position}</p>
                </div>
                <div className="info-group">
                    <img src={TeamIcon} alt="" />
                    <p>{player.team}</p>
                </div>
                <div className="info-group">
                    <img src={ScoringIcon} alt="" />
                    <p>{player.points}</p>
                </div>
                <div className="info-group">
                    <img src={AssistsIcon} alt="" />
                    <p>{player.assists}</p>
                </div>
                <div className="info-group">
                    <img src={StealsIcon} alt="" />
                    <p>{player.steals}</p>
                </div>
                <div className="info-group">
                    <img src={BlocksIcon} alt="" />
                    <p>{player.blocks}</p>
                </div>
            </div>
        </div>
    )
};

export default PlayerCard;