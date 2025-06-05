import React, { useState } from "react";

const Balance = ({ balance, realValue }) => {
  return (
    <div className="clicker__info">
      <h2 className="clicker-info__balance">Balance: {balance}</h2>
      <div className="clicker-info__realvalue">~${realValue}</div>
    </div>
  );
};

export default Balance;
