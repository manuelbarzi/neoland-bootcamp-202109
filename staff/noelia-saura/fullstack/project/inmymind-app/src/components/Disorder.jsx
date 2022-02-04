import logger from "../logger";
import "./Disorder.sass";

function Disorder({disorder}) {
  logger.debug("Disorder->render");

 
  const parseBoolToString = (bool) => {
    if (bool) {
      return 'Si';
    }
    return 'No'
  }

  return (
    <>
      <div className="disorder">
        

        <div className="disorder__content">Simptomas: {disorder.symptom}</div>
        <div className="disorder__content">Relajación: {disorder.relax}</div>
        <div className="disorder__content">Sentimientos negativos: {parseBoolToString(disorder.negativestate)}</div>
        <div className="disorder__content">Probleas para respirar: {disorder.breathe}</div>
        <div className="disorder__content">Dificultades tomar deciones: {disorder.initiatives}</div>
        <div className="disorder__content">Que dificultades tuviste: {disorder.whichinitiatives}</div>
        <div className="disorder__content">Reaccionase exagerado: {disorder.overreaction}</div>
        <div className="disorder__content">Tenia temblo en las manos: {disorder.tremblehands}</div>
        <div className="disorder__content">Sentia parlización: {disorder.paralyzed}</div>
        <div className="disorder__content">Tenia muchos nervios: {disorder.nerves}</div>
        <div className="disorder__content">Situaciones de panico: {disorder.worried}</div>
        <div className="disorder__content">Que situaciones tuviste: {disorder.whichworried}</div>
        <div className="disorder__content">Desmotivado para vivir: {disorder.live}</div>
        <div className="disorder__content">Sentimiento de triste o depresión: {disorder.sad}</div>
        <div className="disorder__content">Tenia sueño excesivo: {disorder.verysleep}</div>
        <div className="disorder__content">Nivel de panico: {disorder.panic}</div>
        <div className="disorder__content">Te sientes entusiasmado por algo: {disorder.enthuse}</div>
        <div className="disorder__content">Te sientes desvalorado: {disorder.value}</div>
        <div className="disorder__content">Te sientes irritado: {disorder.irritable}</div>
        <div className="disorder__content">Tienes miedo: {disorder.afraid}</div>
        <div className="disorder__content">Sobrepiensas demasiado: {disorder.overthinking}</div>
        <div className="disorder__content">Cual ha sido el causante de este sentimiento: {disorder.causedstate}</div>
       </div>
    </>
  );
}

export default Disorder;
