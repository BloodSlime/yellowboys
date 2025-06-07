import React, { useState, useEffect, useContext } from "react";
import ClickerContext from "../context/provider";
import { getLeaderboards } from "../api/api";

const LeaderboardModal = () => {
  const [tableToRender, setTableToRender] = useState([]);
  const [openedTable, setOpenedTable] = useState("balance");
  const [info, setInfo] = useState({});
  const { initData, formatNumber, profileInfo } = useContext(ClickerContext);

  useEffect(() => {
    const getLeaderboardsFromServer = async () => {
      const response = await getLeaderboards(initData);

      setInfo({
        leadersByBalance: response.topTenUsersByBalance,
        leadersByReferrals: response.topTenUsersByReferrals,
        balancePlacement: response.userPlacementByBalance,
        refPlacement: response.userPlacementByReferrals,
      });

      setTableToRender(response.topTenUsersByBalance);
    };
    getLeaderboardsFromServer();
  }, []);

  const handleTableChange = (table, tableName) => {
    console.log(info);
    setOpenedTable(tableName);
    setTableToRender([...table]);
  };

  return (
    <div className="modal__content">
      <h2 className="modal-content__header">leaderboards</h2>
      <div className="modal-content__table">
        <div className="modal-content-table__header">
          <button
            className={`modal-content-table-header__item ${openedTable} ${
              openedTable === "balance" ? "active" : ""
            }`}
            onClick={() => handleTableChange(info.leadersByBalance, "balance")}
          >
            balance
          </button>
          <button
            className={`modal-content-table-header__item ${
              openedTable === "referrals" ? "active" : ""
            }`}
            onClick={() =>
              handleTableChange(info.leadersByReferrals, "referrals")
            }
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
          {tableToRender.length === 0 ? (
            <div>Loading...</div>
          ) : (
            tableToRender.map((leader, index) => {
              return (
                <div
                  className={`modal-content-table__item ${
                    profileInfo.username === leader.username ? "active" : ""
                  }`}
                  key={index}
                >
                  {`${index + 1}. ${leader.username} - ${formatNumber(
                    leader.value
                  )}`}
                </div>
              );
            })
          )}
        </div>
        <div className="modal-content__placement">
          Your place:{" "}
          {openedTable === "balance"
            ? info.balancePlacement
            : info.refPlacement}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardModal;
