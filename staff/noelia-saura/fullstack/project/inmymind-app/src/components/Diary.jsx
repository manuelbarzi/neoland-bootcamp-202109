import logger from "../logger";
import "./Diary.sass";

function Diary({diary }) {
  logger.debug("Diary->render");
  

  const parseBoolToString = (bool) => {
    if (bool) {
      return 'Si';
    }
    return 'No'
  }


  return (
    <>
      <div className="diary">
        <div className="diary__content">Emoción: {diary.emotional}</div>
        <div className="diary__content">Tiempo de sueño: {diary.timesleep}</div>
        <div className="diary__content">Hora de despertarse: {diary.timetowakeup}</div>
        <div className="diary__content">Calidad del sueño: {diary.qualitysleep}</div>
        <div className="diary__content">Hidratarse: {parseBoolToString(diary.hydrate)}</div>
        <div className="diary__content">Cantidad de hidratación: {diary.quantityhydrate}</div>
        <div className="diary__content">Ejercicio: {parseBoolToString(diary.exercise)}</div>
        <div className="diary__content">Meditacion: {parseBoolToString(diary.meditation)}</div>
        <div className="diary__content">Dormir tarde: {parseBoolToString(diary.earlywakeup)}</div>
        <div className="diary__content">Hacer la cama: {parseBoolToString(diary.makethebed)}</div>
        <div className="diary__content">Limpiar la cara: {parseBoolToString(diary.cleanface)}</div>
        <div className="diary__content">Limpiar los dientes: {parseBoolToString(diary.cleanteeth)}</div>
        <div className="diary__content">Ducharse: {parseBoolToString(diary.shower)}</div>
        <div className="diary__content">Ordenar: {parseBoolToString(diary.order)}</div>
        <div className="diary__content">Limpiar la casa: {parseBoolToString(diary.cleanhouse)}</div>
        <div className="diary__content">Cambiar las sabanas: {parseBoolToString(diary.changesheets)}</div>
        <div className="diary__content">Cocinar: {parseBoolToString(diary.cooking)}</div>
        <div className="diary__content">Salir a la calle: {parseBoolToString(diary.gotostreet)} </div>
        <div className="diary__content">Tiempo en la calle: {diary.timetostreet}</div>
      </div>
    </>
  );
}

export default Diary;
