import React, { useState } from "react";

import ProfileModal from "./modals/ProfileModal";
import LeaderboardModal from "./modals/LeaderboardModal";
import UpgradesModal from "./modals/UpgradesModal";
import RouletteModal from "./modals/RouletteModal";
import GamesModal from "./modals/GamesModal";

const Modals = ({ modalName, setWhichModal }) => {
  const closeModal = () => {
    setWhichModal("");
    console.log("Modal closed");
  };

  switch (modalName) {
    case "Profile":
      return (
        <div className="modal">
          <div className="modal__overlay" onClick={closeModal}></div>
          <ProfileModal />
        </div>
      );
    case "Leaders":
      return (
        <div className="modal">
          <div className="modal__overlay" onClick={closeModal}></div>
          <LeaderboardModal />
        </div>
      );
    case "Upgrades":
      return (
        <div className="modal">
          <div className="modal__overlay" onClick={closeModal}></div>
          <UpgradesModal />
        </div>
      );
    case "Roulette":
      return (
        <div className="modal">
          <div className="modal__overlay" onClick={closeModal}></div>
          <RouletteModal />
        </div>
      );
    case "Games":
      return (
        <div className="modal">
          <div className="modal__overlay" onClick={closeModal}></div>
          <GamesModal />
        </div>
      );
    default:
      return null;
  }
};

export default Modals;
