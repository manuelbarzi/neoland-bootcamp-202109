import logger from "../logger";
import "./Disorder.sass";

function Disorder({disorder}) {
  logger.debug("Disorder->render");


  const dateFormat = (date) => {
    const d = new Date(date);
    const day = (d.getDate() < 10 ? "0" : "") + d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();

    return day + "-" + month + "-" + year;
  };

 

  return (
    <>
      <div className="disorder">
        <div className="disorder__title">
          <div className="disorder__title__date">{dateFormat(disorder.date)}</div>
        </div>

        <div className="disorder__content">{disorder.symptom}</div>
        <div className="disorder__content">{disorder.relax}</div>
        <div className="disorder__content">{disorder.negativestate}</div>
        <div className="disorder__content">{disorder.breathe}</div>
        <div className="disorder__content">{disorder.initiatives}</div>
        <div className="disorder__content">{disorder.whichinitiatives}</div>
        <div className="disorder__content">{disorder.overreaction}</div>
        <div className="disorder__content">{disorder.tremblehands}</div>
        <div className="disorder__content">{disorder.paralyzed}</div>
        <div className="disorder__content">{disorder.nerves}</div>
        <div className="disorder__content">{disorder.worried}</div>
        <div className="disorder__content">{disorder.whichworried}</div>
        <div className="disorder__content">{disorder.live}</div>
        <div className="disorder__content">{disorder.sad}</div>
        <div className="disorder__content">{disorder.verysleep}</div>
        <div className="disorder__content">{disorder.panic}</div>
        <div className="disorder__content">{disorder.enthuse}</div>
        <div className="disorder__content">{disorder.value}</div>
        <div className="disorder__content">{disorder.irritable}</div>
        <div className="disorder__content">{disorder.afraid}</div>
        <div className="disorder__content">{disorder.overthinking}</div>
        <div className="disorder__content">{disorder.causedstate}</div>
       </div>
    </>
  );
}

export default Disorder;
