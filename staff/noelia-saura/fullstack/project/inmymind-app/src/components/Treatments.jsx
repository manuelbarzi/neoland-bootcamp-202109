import logger from "../logger";
import AppContext from "./AppContext";
import { useEffect, useState, useContext } from "react";
import { addTreatment, retrieveTreatments,deleteTreatment } from "../logic";
import Treatment from "./Treatment";

function Treatments({ onBack }) {
  logger.debug("Treatments->render");

  const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext);

  const { token } = sessionStorage;

  const [treatments, setTreaments] = useState([]);

  const getTreatment = async() => {
    const treatments = await (retrieveTreatments(token));
    setTreaments(treatments);
  }

  const doDeleteTreatment = async(treatmentId) => {
    await deleteTreatment(sessionStorage.token, treatmentId)
    getTreatment()
}

  useEffect(async () => {
    logger.debug("Treatment -> useEffect (componentDidMount)");

    const { token } = sessionStorage;

    if (token) {
      try {
        onFlowStart();

        setTreaments(await retrieveTreatments(token));

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

            getTreatment();

            onFlowEnd();
          } catch ({ message }) {
            onFlowEnd();

            onFeedback(message, "warn");
          }
        }}
      >
        <div className="">
          <h2 className="addtreatments">Add Treatment</h2>
          <input className="container treatments" name="date" type="date" />
          <textarea
            className="container treatments treatments__size"
            name="content"
            rows="10"
            cols="50"
            placeholder="Write your treatment here"
          ></textarea>
          <button className="button container button--addtreatments">Add Treatment</button>
        </div>
      </form>

      {treatments.map((treatmentItem) => (
        <div key={treatmentItem.id}>
          <Treatment treatment={treatmentItem} deleteTreatment={doDeleteTreatment}/>
        </div>
      ))}

    </>
  );
}

export default Treatments;
