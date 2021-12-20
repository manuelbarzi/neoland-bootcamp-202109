import { useState, useEffect, useContext } from "react";
import logger from "../logger";
import "./Home.sass";
import UpdatePassword from "./UpdatePassword";
import Unregister from "./Unregister";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useQueryParams } from "../hooks";
import {
  retrieveDiary,
  retrieveDisorder,
  retrieveNotes,
  retrieveTreatments,
  retrieveUser,
  updateUserPassword,
  unregisterUser,
} from "../logic";
import AppContext from "./AppContext";
import Calendar from "react-calendar";
import Notes from "./Notes";
import Treatments from "./Treatments";
import Diaries from "./Diaries";
import Disorders from "./Disorders";
import Note from "./Note";
import Diary from "./Diary";
import Disorder from "./Disorder";
import Treatment from "./Treatment";

import "react-calendar/dist/Calendar.css";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Menu from "./Menu";

function Home({ onSignOut, onAuthError }) {
  logger.debug("Home -> render");

  const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext);

  const [name, setName] = useState(null);

  const [date, setDate] = useState(null);
  const [notes, setNotes] = useState([]);
  const [diaries, setDiaries] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [disorders, setDisorders] = useState([]);

  const queryParams = useQueryParams();

  const [query, setQuery] = useState(queryParams.get("q"));

  const navigate = useNavigate();

  const location = useLocation();

  const goToHome = () => {
    navigate("/");
  };

  useEffect(async () => {
    logger.debug("Home -> useEffect (componentDidMount)");

    const { token } = sessionStorage;

    if (token) {
      try {
        onFlowStart();

        const user = await retrieveUser(token);

        onFlowEnd();

        const { name } = user;

        setName(name);

        if (!date) {
          changeDate(new Date());
        }
      } catch ({ message }) {
        onFlowEnd();

        onFeedback(message, "warn");

        onAuthError();
      }
    } else {
      onSignOut();
    }
  }, []);

  const search = (query) => {
    setQuery(query);

    navigate(`/search?q=${query}`);
  };

  const dateFormat = (date) => {
    const day = (date.getDate() < 10 ? "0" : "") + date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return year + "-" + month + "-" + day;
  };

  const changeDate = async (date) => {
    const dateF = dateFormat(date);

    setDate(dateF);

    const diaries = await retrieveDiary(sessionStorage.token, dateF);
    const disorders = await retrieveDisorder(sessionStorage.token, dateF);
    const notes = await retrieveNotes(sessionStorage.token, dateF);
    const treatments = await retrieveTreatments(sessionStorage.token, dateF);

    setDiaries(diaries);
    setDisorders(disorders);
    setNotes(notes);
    setTreatments(treatments);
  };

  const doSignOut = () => {
    navigate("/");
    onSignOut();
  };

  const toggleProfile = () => {
    if (location.pathname === "/profile") {
      navigate("/");
    } else {
      navigate("/profile");
    }
  };

  // const goToSearch = () => search(query);

  const toggleNotes = () => {
    if (location.pathname === "/notes") {
      navigate("/");
    } else {
      navigate("/notes");
    }
  };
  const toggleTreatments = () => {
    if (location.pathname === "/treatments") {
      navigate("/");
    } else {
      navigate("/treatments");
    }
  };
  const toggleDiaries = () => {
    if (location.pathname === "/diaries") {
      navigate("/");
    } else {
      navigate("/diaries");
    }
  };
  const toggleDisorder = () => {
    if (location.pathname === "/disorders") {
      navigate("/");
    } else {
      navigate("/disorders");
    }
  };

  const image = process.env.PUBLIC_URL + "/logo.png";
  const text = "In My Mind";

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const updatePassword = (oldPassword, password) => {
    onFlowStart();

    try {
      updateUserPassword(
        sessionStorage.token,
        oldPassword,
        password,
        (error) => {
          if (error) {
            onFlowEnd();

            onFeedback(error.message);

            return;
          }

          onFlowEnd();

          onFeedback("Password updated", "success");
        }
      );
    } catch ({ message }) {
      onFlowEnd();

      onFeedback(message, "warn");
    }
  };

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
    <div className="container container--gapped container--vertical">
      <div className="logo--home container">
        <div className="logo--home__box" onClick={goToHome}>
          <img className="logo--home__image" src={image} />
          <h1 className="logo--home__text">{text}</h1>
        </div>
        <div>
          <Menu signout={doSignOut} />
        </div>
      </div>
      <div>
        <button
          className={`button button-medium button--home ${
            location.pathname === "/diaries" && "button--dark"
          }`}
          onClick={toggleDiaries}
        >
          Diaries
        </button>
        <button
          className={`button button-medium button--home ${
            location.pathname === "/disorder" && "button--dark"
          }`}
          onClick={toggleDisorder}
        >
          Problem
        </button>
      </div>
      <div className="container">
        <button
          className={`button button-medium button--home ${
            location.pathname === "/notes" && "button--dark"
          }`}
          onClick={toggleNotes}
        >
          Notes
        </button>
        <button
          className={`button button-medium button--home ${
            location.pathname === "/treatments" && "button--dark"
          }`}
          onClick={toggleTreatments}
        >
          Treatment
        </button>
      </div>

      <Routes>
        <Route path="/notes" element={<Notes onBack={goToHome} />} />
        <Route path="/treatments" element={<Treatments onBack={goToHome} />} />
        <Route path="/diaries" element={<Diaries onBack={goToHome} />} />
        <Route path="/disorders" element={<Disorders onBack={goToHome} />} />
        <Route
          path="/update-password"
          element={<UpdatePassword onUpdatePassword={updatePassword} />}
        />
        <Route
          path="/unregister"
          element={<Unregister onUnregister={unregister} />}
        />
      </Routes>

      {location.pathname === "/" && (
        <>
          <Calendar onChange={changeDate} />
          <div className="accordion">
            <Accordion
              expanded={expanded === "notes"}
              onChange={handleChange("notes")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ color: "text.secondary" }}>Notes</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {notes.map((noteItem) => (
                  <div key={noteItem.id}>
                    <Note note={noteItem} showDelete={false} />
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "treatments"}
              onChange={handleChange("treatments")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ color: "text.secondary" }}>
                  Treatments
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {treatments.map((treatmentItem) => (
                  <div key={treatmentItem.id}>
                    <Treatment treatment={treatmentItem} />
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "Diaries"}
              onChange={handleChange("Diaries")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ color: "text.secondary" }}>
                  Diaries
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {diaries.map((diaryItem) => (
                  <div key={diaryItem.id}>
                    <Diary diary={diaryItem} />
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "disorder"}
              onChange={handleChange("disorder")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ color: "text.secondary" }}>
                  Problem
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {disorders.map((disorderItem) => (
                  <div key={disorderItem.id}>
                    <Disorder disorder={disorderItem} />
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
