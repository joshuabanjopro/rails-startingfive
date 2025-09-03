import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/application.css"
import Navbar from "../components/Navbar.jsx";
import PlayerCard from "../components/PlayerCard.jsx";
import PlayerCardsList from "../components/PlayerCardsList.jsx";

function mountComponents () {
    console.log("testing...")

    const NavBarEl = document.getElementById("navbar");
    if (NavBarEl) {
        ReactDOM.createRoot(NavBarEl).render(<Navbar />)
    }

    const PlayerCardEl = document.getElementById("playercard");

    if (PlayerCardEl) {
        const playerstats = PlayerCardEl.dataset.playerstats
        const parsedPlayerStats = JSON.parse(playerstats)
        ReactDOM.createRoot(PlayerCardEl).render(<PlayerCard player={parsedPlayerStats}/>)
    }

    const PlayerCardsListEl = document.getElementById("playercards-list");
    if (PlayerCardsListEl) {
        const playerstats = PlayerCardsListEl.dataset.bestplayersmetrics
        const parsedPlayerStats = JSON.parse(playerstats)
        ReactDOM.createRoot(PlayerCardsListEl).render(<PlayerCardsList players={parsedPlayerStats}/>)
    }
};

document.addEventListener("DOMContentLoaded", mountComponents);
document.addEventListener("turbo:load", mountComponents);