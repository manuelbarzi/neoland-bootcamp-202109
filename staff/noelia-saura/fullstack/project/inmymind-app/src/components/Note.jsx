import logger from "../logger";
import AppContext from "./AppContext";
import { useEffect, useState, useContext } from "react";
import { deleteNote } from "../logic";
import "./Note.sass";

function Note({note }) {
  logger.debug("Note->render");
  

  const dateFormat = (date) => {
    const d = new Date(date);
    const day = (d.getDate() < 10 ? "0" : "") + d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();

    return day + "-" + month + "-" + year;
  };



  const doDeleteNote = () => {
     deleteNote(sessionStorage.token, note.id)
     
  }

  return (
    <>
      <div className="note">
        <div className="note__title">
          <div className="note__title__date">{dateFormat(note.date)}</div>
          <div className="note__title__actions">
            <div className="note__title__actions__button">
              <img src="https://img.icons8.com/material-outlined/24/000000/edit.png" />
            </div>
            <div className="note__title__actions__button">
              <button onClick={doDeleteNote} >
                <img src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png" />
              </button>
            </div>
          </div>
        </div>

        <div className="note__content">{note.content}</div>
      </div>
    </>
  );
}

export default Note;
