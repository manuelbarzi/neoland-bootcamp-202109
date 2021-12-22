import { useState, useContext } from "react";
import logger from "../logger";
import Unregister from "./Unregister";

import { unregisterUser } from "../logic";
import AppContext from "./AppContext";

function Profile({ onBack, onSignOut }) {
  logger.debug("Profile -> render");

  const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext);

  const [view, setView] = useState("profile");

  const gotounregister = () => setView("unregister");


  const gotoprofile = () => setView("profile");


  const unregister = (password) => {
    onFlowStart();

    try {
      unregisterUser(sessionStorage.token, password, (error) => {
        if (error) {
          onFlowEnd();

          onFeedback(error.message);

          return;
        }

        logger.info("User unregistered");

        onFlowEnd();

        onFeedback("User unregistered", "success");

        onSignOut();
      });
    } catch ({ message }) {
      onFlowEnd();

      onFeedback(message, "warn");
    }
  };

  return (
    <>
      {view === "unregister" && (
        <Unregister onBack={gotoprofile} onUnregister={unregister} />
      )}
    </>
  );
}

export default Profile;
