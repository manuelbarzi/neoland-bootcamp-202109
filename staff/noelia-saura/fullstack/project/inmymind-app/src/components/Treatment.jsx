import logger from "../logger";
import AppContext from "./AppContext";
import { useEffect, useState, useContext } from "react";
import { deleteTreatment } from "../logic";
import "./Treatment.sass";

function Treatment({treatment }) {
  logger.debug("Treatment->render");
  

  const dateFormat = (date) => {
    const d = new Date(date);
    const day = (d.getDate() < 10 ? "0" : "") + d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();

    return day + "-" + month + "-" + year;
  };

  

  const doDeleteTreatment = () => {
     deleteTreatment(sessionStorage.token, treatment.id)
     
  }

  return (
    <>
      <div className="treatment">
        <div className="treatment__title">
          <div className="treatment__title__date">{dateFormat(treatment.date)}</div>
          <div className="treatment__title__actions">
            <div className="treatment__title__actions__button">
              <img src="https://img.icons8.com/material-outlined/24/000000/edit.png" />
            </div>
            <div className="treatment__title__actions__button">
              <button onClick={doDeleteTreatment} >
                <img src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png" />
              </button>
            </div>
          </div>
        </div>

        <div className="treatment__content">{treatment.content}</div>
      </div>
    </>
  );
}

export default Treatment;
