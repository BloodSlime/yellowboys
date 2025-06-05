import React from "react";

const ProfileModal = () => {
  const statistics = new Map([
    ["Your balance", 1500],
    ["Total earned", 3000],
    ["Amount of referrals", 15],
  ]);

  const telegramId = "861756342"; // Replace with the actual Telegram ID
  const refLink = `https://t.me/YellowBoysAppBot/yboysapp?startapp=${telegramId}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(refLink);
      alert("Referral link copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy referral link:", error);
      alert("Failed to copy referral link. Please try again.");
    }
  };

  return (
    <div className="modal__content">
      <h2 className="modal-content__header">profile</h2>
      <h3 className="modal-content__subheader">statistics</h3>
      <div className="modal-content__stats">
        {Array.from(statistics).map(([key, value], index) => (
          <div className="modal-content-stats__item" key={index}>
            {key}: <span>{value}</span>
          </div>
        ))}
      </div>
      <h3 className="modal-content__subheader">your referral link</h3>
      <div className="modal-content__reflink">
        <div>{refLink}</div>
      </div>
      <div className="modal-content__refbutton-wrapper">
        <button
          className="modal-content__refbutton btn"
          onClick={copyToClipboard}
        >
          Copy!
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
