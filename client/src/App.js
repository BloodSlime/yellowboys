import "./App.scss";
import React, { use, useEffect, useState } from "react";
import { Provider } from "./components/context/provider.js";
import { getUserData } from "./components/api/api.js";
import WebApp from "@twa-dev/sdk";

import Header from "./components/Header.js";
import Clicker from "./components/Clicker.js";
import MenuBar from "./components/MenuBar.js";
import Modals from "./components/Modals.js";

function App() {
  const [whichModal, setWhichModal] = useState("");
  WebApp.ready();

  useEffect(() => {
    if (whichModal !== "") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [whichModal]);

  useEffect(() => {
    const getData = async () => {
      console.log(WebApp.initData);
      const response = await getUserData(WebApp.initData);
      console.log(response);
    };
    getData();
  });

  return (
    <Provider>
      <Header />
      <Clicker />
      <MenuBar setWhichModal={setWhichModal} whichModal={whichModal} />
      {whichModal !== "" ? (
        <Modals modalName={whichModal} setWhichModal={setWhichModal} />
      ) : null}
    </Provider>
  );
}

export default App;
