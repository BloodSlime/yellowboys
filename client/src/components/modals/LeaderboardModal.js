import React, { useState, useEffect, useContext } from "react";
import ClickerContext from "../context/provider";
import { getLeaderboards } from "../api/api";

const LeaderboardModal = () => {
  const [openedTable, setOpenedTable] = useState("balance");
  const [isLoaded, setIsLoaded] = useState(false);
  const { initData } = useContext(ClickerContext);

  const handleTableChange = (table) => {
    setOpenedTable(table);
  };

  let leadersByBalance = [];

  useEffect(() => {
    const getLeaderboardsFromServer = async () => {
      const response = await getLeaderboards(initData);
      console.log(response);
    };
    getLeaderboardsFromServer();
  }, []);

  leadersByBalance = [
    { id: 1, value: 1000, username: "user1" },
    { id: 2, value: 900, username: "user2" },
    { id: 3, value: 800, username: "user3" },
    { id: 4, value: 700, username: "user4" },
    { id: 5, value: 600, username: "user5" },
    { id: 6, value: 500, username: "user6" },
    { id: 7, value: 400, username: "user7" },
    { id: 8, value: 300, username: "user8" },
    { id: 9, value: 200, username: "user9" },
    { id: 10, value: 100, username: "user10" },
  ];
  const placemeentByBalance = 24;

  const leadersByReferrals = [
    { id: 1, value: 50, username: "referral1" },
    { id: 2, value: 45, username: "referral2" },
    { id: 3, value: 40, username: "referral3" },
    { id: 4, value: 35, username: "referral4" },
    { id: 5, value: 30, username: "referral5" },
    { id: 6, value: 25, username: "referral6" },
    { id: 7, value: 20, username: "referral7" },
    { id: 8, value: 15, username: "referral8" },
    { id: 9, value: 10, username: "referral9" },
    { id: 10, value: 5, username: "referral10" },
  ];
  const placemeentByReferrals = 12;

  const leaders =
    openedTable === "balance" ? leadersByBalance : leadersByReferrals;

  return (
    <div className="modal__content">
      <h2 className="modal-content__header">leaderboards</h2>
      <div className="modal-content__table">
        <div className="modal-content-table__header">
          <button
            className={`modal-content-table-header__item ${
              openedTable === "balance" ? "active" : ""
            }`}
            onClick={() => handleTableChange("balance")}
          >
            balance
          </button>
          <button
            className={`modal-content-table-header__item ${
              openedTable === "referrals" ? "active" : ""
            }`}
            onClick={() => handleTableChange("referrals")}
          >
            referrals
          </button>
        </div>
        <div
          className="modal-content-table__body"
          style={
            openedTable === "balance"
              ? { borderRadius: "0 20px 20px 20px" }
              : { borderRadius: "20px 0 20px 20px" }
          }
        >
          {leaders.map((leader, index) => {
            return (
              <div className="modal-content-table__item" key={leader.id}>
                {`${index + 1}. ${leader.username} - ${leader.value}`}
              </div>
            );
          })}
        </div>
        <div className="modal-content__placement">
          Your place:{" "}
          {openedTable === "balance"
            ? placemeentByBalance
            : placemeentByReferrals}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardModal;
