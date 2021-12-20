import logger from "../logger";
import AppContext from "./AppContext";
import { useEffect, useState, useContext } from "react";
import { addDisorder, retrieveDisorder } from "../logic";
import Disorder from "./Disorder";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Disorders({ onBack }) {
  logger.debug("Disorders->render");

  const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext);

  const { token } = sessionStorage;

  const [disorders, setDisorders] = useState([]);

  const getDisorders = async () => {
    const disorders = await retrieveDisorder(token);
    setDisorders(disorders);
  };

  useEffect(async () => {
    logger.debug("Disorder -> useEffect (componentDidMount)");

    if (token) {
      try {
        onFlowStart();

        getDisorders();

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
              symptom,
              relax,
              negativestate,
              breathe,
              initiatives,
              whichinitiatives,
              overreaction,
              tremblehands,
              paralyzed,
              nerves,
              worried,
              whichworried,
              live,
              sad,
              verysleep,
              panic,
              enthuse,
              value,
              irritable,
              afraid,
              overthinking,
              causedstate,
            },
          } = event;

          const parseBool = (b) => {
            return b == "true";
          };

          try {
            onFlowStart();

            await addDisorder(
              date.value,
              symptom.value,
              parseInt(relax.value),
              parseBool(negativestate.value),
              parseInt(breathe.value),
              parseInt(initiatives.value),
              whichinitiatives.value,
              parseInt(overreaction.value),
              parseInt(tremblehands.value),
              parseInt(paralyzed.value),
              parseInt(nerves.value),
              parseInt(worried.value),
              whichworried.value,
              parseInt(live.value),
              parseInt(sad.value),
              parseInt(verysleep.value),
              parseInt(panic.value),
              parseInt(enthuse.value),
              parseInt(value.value),
              parseInt(irritable.value),
              parseInt(afraid.value),
              parseInt(overthinking.value),
              causedstate.value,
              sessionStorage.token
            );

            getDisorders();

            onFlowEnd();
          } catch ({ message }) {
            onFlowEnd();

            onFeedback(message, "warn");
          }
        }}
      >
        <div>
          <h2 className="adddisorder">Add Disorder</h2>
          <input
            className="container disorders"
            id="date"
            name="date"
            type="date"
            defaultValue="date"
          />
          <label htmlFor="date"></label>

          <div className="symptom">
            <h3>Sintomas</h3>
            <div className="symptom--input">
    

                <div className="input--select">
                <input
                  id="symptom"
                  type="radio"
                  name="symptom"
                  defaultValue="estres"
                />
                <label htmlFor="symptom">Estres</label>
                </div>

                <div className="input--select"> 
                <input
                  id="symptom"
                  type="radio"
                  name="symptom"
                  defaultValue="ansiedad"
                />
                <label htmlFor="symptom">Ansiedad</label>
                </div>

                <div className="input--select">
                <input
                  id="symptom"
                  type="radio"
                  name="symptom"
                  defaultValue="tristeza"
                />
                <label htmlFor="symptom">Triste</label>
              </div>
              
              

              <div className="input--select">
                <input
                  id="symptom"
                  type="radio"
                  name="symptom"
                  defaultValue="nervioso"
                />
                <label htmlFor="symptom">Nervioso</label>
              </div>

              <div className="input--select">
                <input
                  id="symptom"
                  type="radio"
                  name="symptom"
                  defaultValue="fatiga"
                />
                <label htmlFor="symptom">Fatiga</label>
                </div>

                <div className="input--select">
                <input
                  id="symptom"
                  type="radio"
                  name="symptom"
                  defaultValue="depresion"
                />
                <label htmlFor="symptom">Depresión</label>
                </div>
            
            <input
              className="input--text"
              id="symptom"
              type="text"
              placeholder="Otros"
            />
            <label htmlFor="symptom"></label>

          </div>
            <div>
              <h3 htmlFor="quantity">Me costo relajarme</h3>
              <div>
                <input
                  className="input--number"
                  id="relax"
                  defaultValue="relax"
                  type="number"
                  name="relax"
                  placeholder="0-5"
                  id="quantity"
                  min="0"
                  max="5"
                />
                <label htmlFor="relax"></label>
              </div>
            </div>

            <div>
              <h3>Tuve sentimientos negativos</h3>
              <div>
                <input
                  className="input--boolean"
                  id="negativestate"
                  type="radio"
                  name="negativestate"
                  defaultValue="true"
                />
                <label htmlFor="negativestate">Verdadero</label>
                <input
                  className="input--boolean"
                  id="negativestate"
                  type="radio"
                  name="negativestate"
                  defaultValue="false"
                />
                <label htmlFor="negativestate">Falso</label>
              </div>
            </div>

            <div>
              <h3>Tuve problemas para respirar</h3>
              <div>
                <input
                  className="input--number"
                  id="breathe"
                  defaultValue="breathe"
                  type="number"
                  name="breathe"
                  placeholder="0-5"
                  id="breathe"
                  min="0"
                  max="5"
                />
                <label htmlFor="breathe"></label>
              </div>
            </div>

            <div>
              <h3>
                Se me hizo dificil tomar iniciaivas para realizar cualquier
                acción
              </h3>
              <div>
                <input
                  className="input--number"
                  id="initiatives"
                  defaultValue="initiatives"
                  type="number"
                  name="initiatives"
                  placeholder="0-5"
                  id="initiatives"
                  min="0"
                  max="5"
                />
                <label htmlFor="initiatives"></label>
                <input
                  className="input--text"
                  id="whichinitiatives"
                  type="text"
                  placeholder="Que iniciativas?"
                />
                <label htmlFor="whichinitiatives"></label>
              </div>
            </div>

            <div>
              <h3>He reaccionado exageradamente en algun momento</h3>
              <div>
                <input
                  className="input--number"
                  id="overreaction"
                  defaultValue="overreaction"
                  type="number"
                  name="overreaction"
                  placeholder="0-5"
                  id="overreaction"
                  min="0"
                  max="5"
                />
                <label htmlFor="overreaction"></label>
              </div>
            </div>

            <div>
              <h3>Senti que mis manos temblaban</h3>
              <div>
                <input
                  className="input--number"
                  id="tremblehands"
                  defaultValue="tremblehands"
                  type="number"
                  name="tremblehands"
                  placeholder="0-5"
                  id="tremblehands"
                  min="0"
                  max="5"
                />
                <label htmlFor="tremblehands"></label>
              </div>
            </div>

            <div>
              <h3>Senti paralización en algun extremida</h3>
              <div>
                <input
                  className="input--number"
                  id="paralyzed"
                  defaultValue="paralyzed"
                  type="number"
                  name="paralyzed"
                  placeholder="0-5"
                  id="paralyzed"
                  min="0"
                  max="5"
                />
                <label htmlFor="paralyzed"></label>
              </div>
            </div>

            <div>
              <h3>Senti muchos nervios</h3>
              <div>
                <input
                  className="input--number"
                  id="nerves"
                  defaultValue="nerves"
                  type="number"
                  name="nerves"
                  placeholder="0-5"
                  id="nerves"
                  min="0"
                  max="5"
                />
                <label htmlFor="nerves"></label>
              </div>
            </div>

            <div>
              <h3>
                Me preocupaba situaciones donde podia tener panico o podia hacer
                un acto no aceptado por la sociedad
              </h3>
              <div>
                <input
                  className="input--number"
                  id="worried"
                  defaultValue="worried"
                  type="number"
                  name="worried"
                  placeholder="0-5"
                  id="worried"
                  min="0"
                  max="5"
                />
                <label htmlFor="worried"></label>
                <input
                  className="input--text"
                  id="whichworried"
                  type="text"
                  placeholder="Que situaciones?"
                />
                <label htmlFor="whichworried"></label>
              </div>
            </div>

            <div>
              <h3>
                Senti desmotivación para vivir o sentido para seguir viviendo
              </h3>
              <div>
                <input
                  className="input--number"
                  id="live"
                  defaultValue="live"
                  type="number"
                  name="live"
                  placeholder="0-5"
                  id="live"
                  min="0"
                  max="5"
                />
                <label htmlFor="live"></label>
              </div>
            </div>

            <div>
              <h3>Me senti triste o con depresión</h3>
              <div>
                <input
                  className="input--number"
                  id="sad"
                  defaultValue="sad"
                  type="number"
                  name="sad"
                  placeholder="0-5"
                  id="sad"
                  min="0"
                  max="5"
                />
                <label htmlFor="sad"></label>
              </div>
            </div>

            <div>
              <h3>Tenia sueño excesivo o con ganas de dormir constantemente</h3>
              <div>
                <input
                  className="input--number"
                  id="verysleep"
                  defaultValue="verysleep"
                  type="number"
                  name="verysleep"
                  placeholder="0-5"
                  id="verysleep"
                  min="0"
                  max="5"
                />
                <label htmlFor="verysleep"></label>
              </div>
            </div>

            <div>
              <h3>En que nivel de panico consideras que te encuentras</h3>
              <div>
                <input
                  className="input--number"
                  id="panic"
                  defaultValue="panic"
                  type="number"
                  name="panic"
                  placeholder="0-5"
                  id="panic"
                  min="0"
                  max="5"
                />
                <label htmlFor="panic"></label>
              </div>
            </div>

            <div>
              <h3>Te sientes entusiasmado por algo</h3>
              <div>
                <input
                  className="input--number"
                  id="enthuse"
                  defaultValue="enthuse"
                  type="number"
                  name="enthuse"
                  placeholder="0-5"
                  id="enthuse"
                  min="0"
                  max="5"
                />
                <label htmlFor="enthuse"></label>
              </div>
            </div>

            <div>
              <h3>Sentia que valia muy poco como persona</h3>
              <div>
                <input
                  className="input--number"
                  id="value"
                  defaultValue="value"
                  type="number"
                  name="value"
                  placeholder="0-5"
                  id="value"
                  min="0"
                  max="5"
                />
                <label htmlFor="value"></label>
              </div>
            </div>

            <div>
              <h3>Me sentia muy irritado</h3>
              <div>
                <input
                  className="input--number"
                  id="irritable"
                  defaultValue="irritable"
                  type="number"
                  name="irritable"
                  placeholder="0-5"
                  id="irritable"
                  min="0"
                  max="5"
                />
                <label htmlFor="irritable"></label>
              </div>
            </div>

            <div>
              <h3>Senti miedo sin ninguna razon</h3>
              <div>
                <input
                  className="input--number"
                  id="afraid"
                  defaultValue="afraid"
                  type="number"
                  name="afraid"
                  placeholder="0-5"
                  id="afraid"
                  min="0"
                  max="5"
                />
                <label htmlFor="afraid"></label>
              </div>
            </div>

            <div>
              <h3>Sobrepiensas demasiado las cosas</h3>
              <div>
                <input
                  className="input--number"
                  id="overthinking"
                  defaultValue="overthinking"
                  type="number"
                  name="overthinking"
                  placeholder="0-5"
                  id="overthinking"
                  min="0"
                  max="5"
                />
                <label htmlFor="overthinking"></label>
              </div>
            </div>

            <div>
              <h3>Que crees que ha ocasionado este estado</h3>
              <div>
                <input
                  className="input--text"
                  id="causedstate"
                  type="text"
                  placeholder=""
                />
                <label htmlFor="causedstate"></label>
              </div>
            </div>
          </div>
          <button className="button container button--adddisorder">
            Add Disorder
          </button>
        </div>
      </form>

      <div className='accordion'>
        {disorders.map((disorderItem) => (
          <Accordion
            expanded={expanded === disorderItem.id}
            onChange={handleChange(disorderItem.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ color: "text.secondary" }}>
                {dateFormat(disorderItem.date)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div key={disorderItem.id}>
                <Disorder disorder={disorderItem} />
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
}

export default Disorders;
