import { useState, useEffect, useContext } from "react";
import logger from "../logger";
import "./Home.sass";
import Profile from "./Profile";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useQueryParams } from "../hooks";
import { retrieveUser } from "../logic";
import AppContext from "./AppContext";
import Calendar from 'react-calendar';
import Notes from "./Notes";
import Treatment from "./Treatment";
import Diary from "./Diary";
import Disorder from "./Disorder";

import 'react-calendar/dist/Calendar.css';

function Home({ onSignOut, onAuthError }) {
  logger.debug("Home -> render");

  const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext);


  const [name, setName] = useState(null);

  const queryParams = useQueryParams();

  const [query, setQuery] = useState(queryParams.get("q"));

  const navigate = useNavigate();

  const location = useLocation();

  const goToHome = () => {
    navigate('/')
  }

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
      } catch ({ message }) {
        onFlowEnd();

        onFeedback(message, "warn");

        onAuthError();
      }
    }else{
      onSignOut()
    }
  }, []);

  const search = (query) => {
    setQuery(query);

    navigate(`/search?q=${query}`);
  };

  const cacaMas = (date) => {
    console.log(date)
  }

  const doSignOut = () => {
    navigate('/')
    onSignOut()
  }

  const toggleProfile = () => {
    if (location.pathname === "/profile") {
      navigate('/')
    } else {
      navigate('/profile')
    }
  }

  // const goToSearch = () => search(query);

  const toggleNotes = () => {
    if (location.pathname === "/notes") {
      navigate('/')
    } else {
      navigate('/notes')
    }
  }
  const toggleTreatment = () => {
    if (location.pathname === "/treatment") {
      navigate('/')
    } else {
      navigate('/treatment')
    }
  }
  const toggleDiary = () => {
    if (location.pathname === "/diary") {
      navigate('/')
    } else {
      navigate('/diary')
    }
  }
  const toggleDisorder = () => {
    if (location.pathname === "/disorder") {
      navigate('/')
    } else {
      navigate('/disorder')
    }
  }

  const image = process.env.PUBLIC_URL + "/logo.png";
  const text = "In My Mind";

  return (
    <div className="container container--gapped container--vertical">
      <div className="logo--home container">
        <img className="logo--home__image" src={image} />
        <h1 className="logo--home__text">{text}</h1>
        <button
          className={`button button-medium dropdown  ${
            location.pathname === "/profile" && "button--dark"
          }`}
          onClick={toggleProfile}
        >
          <svg viewBox="0 0 100 80" width="30" height="20">
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </svg>
        </button>
      </div>
      <div>
      <button className={`button button-medium button--home ${location.pathname === "/Diary" && "button--dark"}`} onClick={toggleDiary}>Diary</button>
        <button className={`button button-medium button--home ${location.pathname === "/Disorder" && "button--dark"}`} onClick={toggleDisorder}>Problem</button>
      </div>
      <div className="container">
        <button className={`button button-medium button--home ${location.pathname === "/notes" && "button--dark"}`} onClick={toggleNotes}>Notes</button>
        <button className={`button button-medium button--home ${location.pathname === "/treatment" && "button--dark"}`} onClick={toggleTreatment}>Treatment</button>
      </div>

      <Routes>
        <Route path="/profile" element={<Profile onBack={goToHome} onSignOut={doSignOut} />} />
        <Route path='/notes' element={<Notes onBack={goToHome} />}/>
        <Route path='/treatment' element={<Treatment />}/>
        {/* <Route path='/Diary' element={<Diary />}/>
        <Route path='/Disorder' element={<Disorder />}/> */}
      </Routes>

      { location.pathname === "/"  || location.pathname === "/profile" ? <Calendar onchange={cacaMas}/> : ''}

    </div>
  );
}

export default Home;
