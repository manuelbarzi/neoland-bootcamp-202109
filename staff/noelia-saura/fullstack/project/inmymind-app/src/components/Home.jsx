import { useState, useEffect, useContext } from "react";
import logger from "../logger";
import "./Home.sass";
import Profile from "./Profile";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useQueryParams } from "../hooks";
import { retrieveUser } from "../logic";
import AppContext from "./AppContext";

function Home({ onSignOut, onAuthError }) {
  logger.debug("Home -> render");

  const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext);


  const [name, setName] = useState(null);

  const queryParams = useQueryParams();

  const [query, setQuery] = useState(queryParams.get("q"));

  const navigate = useNavigate();

  const location = useLocation();

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
    }
  }, []);

  const search = (query) => {
    setQuery(query);

    navigate(`/search?q=${query}`);
  };

  const doSignOut = () => {
    navigate('/')
    onSignOut()
  }

  const toggleProfle = () => {
    if (location.pathname === "/profile") {
      navigate('/')
    } else {
      navigate('/profile')
    }
  }

  // const goToSearch = () => search(query);

  const gotoNotes = ()=> navigate("/notes")

  const image = process.env.PUBLIC_URL + "/logo.png";
  const text = "In My Mind";

  return (
    <div className="container container--gapped container--vertical">
      <div className="logo--home container">
        <img className="logo--home__image" src={image} />
        <h1 className="logo--home__text">{text}</h1>
        <button
          className={`button button-medium  ${
            location.pathname === "/profile" && "button--dark"
          }`}
          onClick={toggleProfle}
        >
          <svg viewBox="0 0 100 80" width="30" height="20">
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </svg>
        </button>
      </div>
      
      <div className="container">
        <button className={`button button-medium ${location.pathname === "/notes" && "button--dark"}`} onClick={gotoNotes}>Notes</button>
        
      </div>

      <Routes>
        <Route path="/profile" element={<Profile onBack={() => {}} onSignOut={doSignOut} />} />
      </Routes>

    </div>
  );
}

export default Home;
