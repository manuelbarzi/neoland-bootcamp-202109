import logger from "../logger";
import AppContext from "./AppContext";
import { useEffect, useState, useContext } from "react";
import { addDisorder, retrieveDisorder } from "../logic";
import Disorder from "./Disorder";

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
          debugger;
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

          try {
            onFlowStart();

            await addDisorder(
              symptom.value,
              relax.value,
              negativestate.value,
              breathe.value,
              initiatives.value,
              whichinitiatives.value,
              overreaction.value,
              tremblehands.value,
              paralyzed.value,
              nerves.value,
              worried.value,
              whichworried.value,
              live.value,
              sad.value,
              verysleep.value,
              panic.value,
              enthuse.value,
              value.value,
              irritable.value,
              afraid.value,
              overthinking.value,
              causedstate.value,
              date.value,
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
        <div className="">
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
              <div className="symptom--input__left">
                <input
                  id="symptom"
                  type="radio"
                  name="symptom"
                  defaultValue="estres"
                />
                <label htmlFor="symptom">Estres</label>
                <input
                  id="symptom"
                  type="radio"
                  name="symptom"
                  defaultValue="ansiedad"
                />
                <label htmlFor="symptom">Ansiedad</label>
                <input
                  id="symptom"
                  type="radio"
                  name="symptom"
                  defaultValue="tristeza"
                />
                <label htmlFor="symptom">Triste</label>
              </div>
              <div className="symptom--input__right">
                <input
                  id="symptom"
                  type="radio"
                  name="symptom"
                  defaultValue="nervioso"
                />
                <label htmlFor="symptom">Nervioso</label>
                <input
                  id="symptom"
                  type="radio"
                  name="symptom"
                  defaultValue="fatiga"
                />
                <label htmlFor="symptom">Fatiga</label>
                <input
                  id="symptom"
                  type="radio"
                  name="symptom"
                  defaultValue="depresion"
                />
                <label htmlFor="symptom">Depresión</label>
              </div>
            </div>
            <input
              className="input--text"
              id="symptom"
              type="text"
              placeholder="Otros"
            />
            <label htmlFor="symptom"></label>

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

      {disorders.map((disorderItem) => (
        <div key={disorderItem.id}>
          <Disorder disorder={disorderItem} />
        </div>
      ))}
    </>
  );
}

export default Disorders;
