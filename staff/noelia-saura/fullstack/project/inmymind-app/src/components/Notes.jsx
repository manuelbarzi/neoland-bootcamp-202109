import logger from "../logger";
import AppContext from "./AppContext";
import { useEffect, useState, useContext } from "react";
import { addNote, retrieveNotes, deleteNote } from "../logic";
import Note from "./Note";
import * as React from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Notes({ onBack }) {
  logger.debug("Notes->render");

  const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext);

  const { token } = sessionStorage;
  
  const [notes, setNotes] = useState([]);

  const getNotes = async() => {
    const notes = await (retrieveNotes(token));
    setNotes(notes);
  }

  const doDeleteNote = async(noteId) => {
    await deleteNote(sessionStorage.token, noteId)
    getNotes()
}

  useEffect(async () => {
    logger.debug("Note -> useEffect (componentDidMount)");

    if (token) {
      try {
        onFlowStart();

        getNotes();

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

            await addNote(content.value, date.value, sessionStorage.token);

            getNotes();

            onFlowEnd();
          } catch ({ message }) {
            onFlowEnd();

            onFeedback(message, "warn");
          }
        }}
      >
        <div className="">
          <h2 className="addnote">Add Note</h2>
          <input className="container notes" name="date" type="date" />
          <textarea
            className="container notes notes__size"
            name="content"
            rows="10"
            cols="50"
            placeholder="Write your note here"
          ></textarea>
          <button className="button container button--addnote">Add Note</button>
        </div>
      </form>

      <div className='accordion'>
        {notes.map((noteItem) => (
          <Accordion
            expanded={expanded === noteItem.id}
            onChange={handleChange(noteItem.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ color: "text.secondary" }}>
                {dateFormat(noteItem.date)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div key={noteItem.id}>
                <Note
                  note={noteItem}
                  deleteNote={doDeleteNote} showDelete={true} 
                  />
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
}

export default Notes;
