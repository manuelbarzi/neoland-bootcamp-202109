import logger from "../logger";
import AppContext from "./AppContext";
import { useEffect, useState, useContext } from "react";
import { addDiary, retrieveDiary } from "../logic";
import Diary from "./Diary";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Diaries({ onBack }) {
  logger.debug("Diaries->render");

  const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext);

  const { token } = sessionStorage;

  const [diaries, setDiaries] = useState([]);

  const getDiaries = async () => {
    const diaries = await retrieveDiary(token);
    setDiaries(diaries);
  };

  useEffect(async () => {
    logger.debug("Diary -> useEffect (componentDidMount)");

    if (token) {
      try {
        onFlowStart();

        getDiaries();

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
            target: {
              date,
              emotional,
              timesleep,
              timetowakeup,
              qualitysleep,
              hydrate,
              quantityhydrate,
              exercise,
              meditation,
              earlywakeup,
              makethebed,
              cleanface,
              cleanteeth,
              shower,
              order,
              cleanhouse,
              changesheets,
              cooking,
              gotostreet,
              timetostreet,
            },
          } = event;

          const parseBool = (b) => {
            return b == "true";
          };

          try {
            onFlowStart();

            await addDiary(
              date.value,
              emotional.value,
              parseInt(timesleep.value),
              timetowakeup.value,
              parseInt(qualitysleep.value),
              parseBool(hydrate.value),
              parseInt(quantityhydrate.value),
              parseBool(exercise.value),
              parseBool(meditation.value),
              parseBool(earlywakeup.value),
              parseBool(makethebed.value),
              parseBool(cleanface.value),
              parseBool(cleanteeth.value),
              parseBool(shower.value),
              parseBool(order.value),
              parseBool(cleanhouse.value),
              parseBool(changesheets.value),
              parseBool(cooking.value),
              parseBool(gotostreet.value),
              timetostreet.value,
              sessionStorage.token
            );

            getDiaries();

            onFlowEnd();
          } catch ({ message }) {
            onFlowEnd();

            onFeedback(message, "warn");
          }
        }}
      >
        <div className="">
          <h2 className="adddiary">Add Diary</h2>
          <input
            className="container diaries"
            name="date"
            type="date"
            id="date"
            defaultValue="date"
          />
          <label htmlFor="date"></label>

          <div className="emotional">
            <h3>Estado emocional</h3>
            <div className="emotional--input">
              <div className="input--select">
                <input
                  type="radio"
                  name="emotional"
                  id="emotional"
                  defaultValue="enfadado"
                />
                <label htmlFor="emotional">Enfadado</label>
              </div>
              <div className="input--select">
                <input
                  type="radio"
                  name="emotional"
                  id="emotional"
                  defaultValue="triste"
                />
                <label htmlFor="emotional">Triste</label>
              </div>
              <div className="input--select">
                <input
                  type="radio"
                  name="emotional"
                  id="emotional"
                  defaultValue="aburrido"
                />
                <label htmlFor="emotional">Aburrido</label>
              </div>

              <div className="input--select">
                <input
                  type="radio"
                  name="emotional"
                  id="emotional"
                  defaultValue="normal"
                />
                <label htmlFor="emotional">Normal</label>
              </div>

              <div className="input--select">
                <input
                  type="radio"
                  name="emotional"
                  id="emotional"
                  defaultValue="feliz"
                />
                <label htmlFor="emotional">Feliz</label>
              </div>

              <div className="input--select">
                <input
                  type="radio"
                  name="emotional"
                  id="emotional"
                  defaultValue="nervioso"
                />
                <label htmlFor="emotional">Nervioso</label>
              </div>
              
              <div className="input--select">
                <input
                  type="radio"
                  name="emotional"
                  id="emotional"
                  defaultValue="calmado"
                />
                <label htmlFor="emotional">Calmado</label>
              </div>

              <div className="input--select">
                <input
                  type="radio"
                  name="emotional"
                  id="emotional"
                  defaultValue="productivo"
                />
                <label htmlFor="emotional">Productivo</label>
              </div>

              <div className="input--select">
                <input
                  type="radio"
                  name="emotional"
                  id="emotional"
                  defaultValue="enfermo"
                />
                <label htmlFor="emotional">Enfermo</label>
              </div>

              <div className="input--select">
                <input
                  type="radio"
                  name="emotional"
                  id="emotional"
                  defaultValue="estresado"
                />
                <label htmlFor="emotional">Estresado</label>
              </div>
            </div>
            <input
              className="input--text"
              type="text"
              id="emotional"
              placeholder="Otros"
            />
            <label htmlFor="emotional"></label>

            <div>
              <h3>Tiempo de sueño</h3>
              <div>
                <input
                  className="input--number"
                  id="timesleep"
                  defaultValue="timesleep"
                  type="number"
                  name="timesleep"
                  placeholder="0-12 horas"
                  id="timesleep"
                  min="0"
                  max="12"
                />
                <label htmlFor="timesleep"></label>
              </div>
            </div>

            <div>
              <h3>Hora que te despertaste</h3>
              <label htmlFor="timetowakeup" />
              <input
                id="timetowakeup"
                defaultValue="timetowakeup"
                className="input--text"
                type="time"
                name="timetowakeup"
                min="00:00"
                max="23:59"
                required
              />
            </div>

            <div>
              <h3>Calidad del sueño</h3>
              <div>
                <input
                  className="input--number"
                  defaultValue="qualitysleep"
                  type="number"
                  name="qualitysleep"
                  placeholder="0 - 5 (0 mal , 5 muy bien)"
                  id="qualitysleep"
                  min="0"
                  max="5"
                />
                <label htmlFor="qualitysleep"></label>
              </div>
            </div>

            <div>
              <h3>Te has hidratado</h3>
              <div>
                <input
                  className="input--boolean"
                  id="hydrate"
                  type="radio"
                  name="hydrate"
                  defaultValue="true"
                />
                <label htmlFor="hydrate">Verdadero</label>
                <input
                  className="input--boolean"
                  id="hydrate"
                  type="radio"
                  name="hydrate"
                  defaultValue="false"
                />
                <label htmlFor="hydrate">Falso</label>
              </div>
            </div>

            <div>
              <h3>Cantidad de hidratación</h3>
              <div>
                <input
                  className="input--number"
                  type="number"
                  defaultValue="quantityhydrate"
                  name="quantityhydrate"
                  placeholder="0 - 10"
                  id="quantityhydrate"
                  min="0"
                  max="10"
                />
                <label htmlFor="quantityhydrate"></label>
              </div>
            </div>

            <div>
              <h3>Ejercicio</h3>
              <div>
                <input
                  className="input--boolean"
                  id="exercise"
                  type="radio"
                  name="exercise"
                  defaultValue="true"
                />
                <label htmlFor="exercise">Verdadero</label>
                <input
                  className="input--boolean"
                  id="exercise"
                  type="radio"
                  name="exercise"
                  defaultValue="false"
                />
                <label htmlFor="exercise">Falso</label>
              </div>
            </div>

            <div>
              <h3>Meditación</h3>
              <div>
                <input
                  className="input--boolean"
                  id="meditation"
                  type="radio"
                  name="meditation"
                  defaultValue="true"
                />
                <label htmlFor="meditation">Verdadero</label>
                <input
                  className="input--boolean"
                  id="meditation"
                  type="radio"
                  name="meditation"
                  defaultValue="false"
                />
                <label htmlFor="meditation">Falso</label>
              </div>
            </div>

            <div>
              <h3>Te has despertado pronto</h3>
              <div>
                <input
                  className="input--boolean"
                  id="earlywakeup"
                  type="radio"
                  name="earlywakeup"
                  defaultValue="true"
                />
                <label htmlFor="earlywakeup">Verdadero</label>
                <input
                  className="input--boolean"
                  id="earlywakeup"
                  type="radio"
                  name="earlywakeup"
                  defaultValue="false"
                />
                <label htmlFor="earlywakeup">Falso</label>
              </div>
            </div>

            <div>
              <h3>Has hecho la cama</h3>
              <div>
                <input
                  className="input--boolean"
                  id="makethebed"
                  type="radio"
                  name="makethebed"
                  defaultValue="true"
                />
                <label htmlFor="makethebed">Verdadero</label>
                <input
                  className="input--boolean"
                  id="makethebed"
                  type="radio"
                  name="makethebed"
                  defaultValue="false"
                />
                <label htmlFor="makethebed">Falso</label>
              </div>
            </div>

            <div>
              <h3>Te has lavado la cara</h3>
              <div>
                <input
                  className="input--boolean"
                  id="cleanface"
                  type="radio"
                  name="cleanface"
                  defaultValue="true"
                />
                <label htmlFor="cleanface">Verdadero</label>
                <input
                  className="input--boolean"
                  id="cleanface"
                  type="radio"
                  name="cleanface"
                  defaultValue="false"
                />
                <label htmlFor="cleanface">Falso</label>
              </div>
            </div>

            <div>
              <h3>Te has lavado los dientes</h3>
              <div>
                <input
                  className="input--boolean"
                  id="cleanteeth"
                  type="radio"
                  name="cleanteeth"
                  defaultValue="true"
                />
                <label htmlFor="cleanteeth">Verdadero</label>
                <input
                  className="input--boolean"
                  id="cleanteeth"
                  type="radio"
                  name="cleanteeth"
                  defaultValue="false"
                />
                <label htmlFor="cleanteeth">Falso</label>
              </div>
            </div>

            <div>
              <h3>Te has duchado</h3>
              <div>
                <input
                  className="input--boolean"
                  id="shower"
                  type="radio"
                  name="shower"
                  defaultValue="true"
                />
                <label htmlFor="shower">Verdadero</label>
                <input
                  className="input--boolean"
                  id="shower"
                  type="radio"
                  name="shower"
                  defaultValue="false"
                />
                <label htmlFor="shower">Falso</label>
              </div>
            </div>

            <div>
              <h3>Has ordenado</h3>
              <div>
                <input
                  className="input--boolean"
                  id="order"
                  type="radio"
                  name="order"
                  defaultValue="true"
                />
                <label htmlFor="order">Verdadero</label>
                <input
                  className="input--boolean"
                  id="order"
                  type="radio"
                  name="order"
                  defaultValue="false"
                />
                <label htmlFor="order">Falso</label>
              </div>
            </div>

            <div>
              <h3>Has limpiado la casa</h3>
              <div>
                <input
                  className="input--boolean"
                  id="cleanhouse"
                  type="radio"
                  name="cleanhouse"
                  defaultValue="true"
                />
                <label htmlFor="cleanhouse">Verdadero</label>
                <input
                  className="input--boolean"
                  id="cleanhouse"
                  type="radio"
                  name="cleanhouse"
                  defaultValue="false"
                />
                <label htmlFor="cleanhouse">Falso</label>
              </div>
            </div>

            <div>
              <h3>Has cambiado las sabanas</h3>
              <div>
                <input
                  className="input--boolean"
                  id="changesheets"
                  type="radio"
                  name="changesheets"
                  defaultValue="true"
                />
                <label htmlFor="changesheets">Verdadero</label>
                <input
                  className="input--boolean"
                  id="changesheets"
                  type="radio"
                  name="changesheets"
                  defaultValue="false"
                />
                <label htmlFor="changesheets">Falso</label>
              </div>
            </div>

            <div>
              <h3>Has cocinado</h3>
              <div>
                <input
                  className="input--boolean"
                  id="cooking"
                  type="radio"
                  name="cooking"
                  defaultValue="true"
                />
                <label htmlFor="cooking">Verdadero</label>
                <input
                  className="input--boolean"
                  id="cooking"
                  type="radio"
                  name="cooking"
                  defaultValue="false"
                />
                <label htmlFor="cooking">Falso</label>
              </div>
            </div>

            <div>
              <h3>Has salido a la calle</h3>
              <div>
                <input
                  className="input--boolean"
                  id="gotostreet"
                  type="radio"
                  name="gotostreet"
                  defaultValue="true"
                />
                <label htmlFor="gotostreet">Verdadero</label>
                <input
                  className="input--boolean"
                  id="gotostreet"
                  type="radio"
                  name="gotostreet"
                  defaultValue="false"
                />
                <label htmlFor="gotostreet">Falso</label>
              </div>
            </div>

            <div>
              <h3>Cuanto tiempo has estado en la calle</h3>
              <label htmlFor="timetostreet" />
              <input
                id="timetostreet"
                className="input--text"
                defaultValue="timetostreet"
                type="time"
                name="timetostreet"
                min="00:00"
                max="23:59"
                required
              />
            </div>
          </div>
          <button className="button container button--adddiary">
            Add Diary
          </button>
        </div>
      </form>

      <div className="accordion">
        {diaries.map((diaryItem) => (
          <Accordion
            expanded={expanded === diaryItem.id}
            onChange={handleChange(diaryItem.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ color: "text.secondary" }}>
                {dateFormat(diaryItem.date)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div key={diaryItem.id}>
                <Diary diary={diaryItem} />
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
}

export default Diaries;
