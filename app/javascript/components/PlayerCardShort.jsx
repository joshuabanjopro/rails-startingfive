import React from "react";
import PointGuard from "../assets/point_guard.png"
import ShootingGuard from "../assets/shooting_guard.png"
import SmallForward from "../assets/small_forward.png"
import PowerForward from "../assets/power_forward.png"
import CenterForward from "../assets/center_forward.png"
import ScoringIcon from "../assets/scoring_icon.png"
import TeamIcon from "../assets/team_icon.png"
import PlaceHolderPlayer from "../assets/placeholder_player.png"

const PlayerCardShort = ({player}) => {

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
                <a href={`/players/${player.id}`}>
                    <button>Key Stats Across Szn</button>
                </a>
            </div>
        </div>
    )
};

export default PlayerCardShort;