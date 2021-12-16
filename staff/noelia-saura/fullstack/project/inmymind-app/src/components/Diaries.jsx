import logger from "../logger";
import AppContext from "./AppContext";
import { useEffect, useState, useContext } from "react";
import { addDiary, retrieveDiary } from "../logic";
import Diary from "./Diary";

function Diaries({ onBack }) {
  logger.debug("Diaries->render");

  const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext);

  const { token } = sessionStorage;

  const [diaries, setDiaries] = useState([]);

  const getDiaries=()=>{
    setDiaries(retrieveDiary(token))
  }

  useEffect(async () => {
    logger.debug("Diary -> useEffect (componentDidMount)");

    if (token) {
      try {
        onFlowStart();

        setDiaries(await retrieveDiary(token));

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

            await addDiary(content.value, date.value, sessionStorage.token);

            setDiaries(await retrieveDiary(sessionStorage.token));

            onFlowEnd();
          } catch ({ message }) {
            onFlowEnd();

            onFeedback(message, "warn");
          }
        }}
      >
        <div className="">
          <h2 className="diary">Add Diary</h2>
          <input className="container diaries" name="date" type="date" />
          <h3>Estado emocional</h3>
          <input type="radio" name='enfadado' value='enfadado' />Enfadado
          <br />
          <input type="radio" name='triste' value='triste' />Triste
          <br />
          <button className="button container button--diary">Add Diary</button>
        </div>
      </form>

      {diaries.map((diaryItem) => (
        <div key={diaryItem.id}>
          <Diary diary={diaryItem} />
        </div>
      ))}

    </>
  );
}

export default Diaries;