import logger from "../logger";
import AppContext from "./AppContext";
import { useEffect, useState, useContext } from "react";
import { addTreatment, retrieveTreatment } from "../logic";
import Treatment from "./Treatment";

function Treatments({ onBack }) {
  logger.debug("Treatments->render");

  const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext);

  const [treatments, setTreaments] = useState([]);

  useEffect(async () => {
    logger.debug("Treatment -> useEffect (componentDidMount)");

    const { token } = sessionStorage;

    if (token) {
      try {
        onFlowStart();

        setTreaments(await retrieveTreatment(token));

        onFlowEnd();
      } catch ({ message }) {
        onFlowEnd();

        onFeedback(message, "warn");
      }
    }
  }, []);

  return (
    <>
      <button className="button--goback" onClick={onBack}>
        <img
          className="img--goback"
          src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-back-basic-ui-elements-flatart-icons-outline-flatarticons.png"
        />
      </button>

      <form
        className="container container--vertical container--gapped"
        onSubmit={async (event) => {
          event.preventDefault();

          const {
            target: { date, content },
          } = event;

          try {
            onFlowStart();

            await addTreatment(content.value, date.value, sessionStorage.token);

            setTreaments(await retrieveTreatment(sessionStorage.token));

            onFlowEnd();
          } catch ({ message }) {
            onFlowEnd();

            onFeedback(message, "warn");
          }
        }}
      >
        <div className="">
          <h2 className="addtreatment">Add Treatment</h2>
          <input className="container treatments" name="date" type="date" />
          <textarea
            className="container treatments treatments__size"
            name="content"
            rows="10"
            cols="50"
            placeholder="Write your treatment here"
          ></textarea>
          <button className="button container button--addtreatment">Add Treatment</button>
        </div>
      </form>

      {treatments.map((treatmentItem) => (
        <div key={treatmentItem.id}>
          <Treatment treatment={treatmentItem} />
        </div>
      ))}

    </>
  );
}

export default Treatments;
