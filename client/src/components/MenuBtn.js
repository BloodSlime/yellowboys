import React from "react";

const MenuBtn = ({ image, text, setWhichModal, whichModal }) => {
  const handleClick = () => {
    setWhichModal(text);
  };

  return (
    <div
      className={`menu__item ${whichModal === text ? "active" : ""}`}
      onClick={handleClick}
    >
      <img className="menu-item__image" src={image} />
      <span>{text}</span>
    </div>
  );
};

export default MenuBtn;
