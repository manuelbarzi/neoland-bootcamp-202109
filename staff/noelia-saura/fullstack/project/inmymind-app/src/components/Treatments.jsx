import logger from "../logger";
import AppContext from "./AppContext";
import { useEffect, useState, useContext } from "react";
import { addTreatment, retrieveTreatments, deleteTreatment } from "../logic";
import Treatment from "./Treatment";
import * as React from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Treatments({ onBack }) {
  logger.debug("Treatments->render");

  const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext);

  const { token } = sessionStorage;

  const [treatments, setTreaments] = useState([]);

  const getTreatment = async () => {
    const treatments = await retrieveTreatments(token);
    setTreaments(treatments);
  };

  const doDeleteTreatment = async (treatmentId) => {
    await deleteTreatment(sessionStorage.token, treatmentId);
    getTreatment();
  };

  useEffect(async () => {
    logger.debug("Treatment -> useEffect (componentDidMount)");

    const { token } = sessionStorage;

    if (token) {
      try {
        onFlowStart();

        getTreatment();

        onFlowEnd();
      } catch ({ message }) {
        onFlowEnd();

        onFeedback(message, "warn");
      }
    }
  }, []);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const dateFormat = (date) => {
    const d = new Date(date);
    const day = (d.getDate() < 10 ? "0" : "") + d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();

    return day + "-" + month + "-" + year;
  };

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
          <button className="button container button--addtreatments">
            Add Treatment
          </button>
        </div>
      </form>

      <div className='accordion'>
        {treatments.map((treatmentItem) => (
          <Accordion
            expanded={expanded === treatmentItem.id}
            onChange={handleChange(treatmentItem.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ color: "text.secondary" }}>
                {dateFormat(treatmentItem.date)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div key={treatmentItem.id}>
                <Treatment
                  treatment={treatmentItem}
                  deleteTreatment={doDeleteTreatment}
                  showDelete={true}
                />
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
}

export default Treatments;
