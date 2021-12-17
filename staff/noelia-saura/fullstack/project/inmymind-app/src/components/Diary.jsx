import logger from "../logger";
import "./Diary.sass";

function Diary({diary }) {
  logger.debug("Diary->render");
  

  const dateFormat = (date) => {
    const d = new Date(date);
    const day = (d.getDate() < 10 ? "0" : "") + d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();

    return day + "-" + month + "-" + year;
  };


  return (
    <>
      <div className="diary">
        <div className="diary__title">
          <div className="diary__title__date">{dateFormat(diary.date)}</div>
        </div>

        <div className="diary__content">{diary.emotional}</div>
        <div className="diary__content">{diary.timesleep}</div>
        <div className="diary__content">{diary.timetowakeup}</div>
        <div className="diary__content">{diary.qualitysleep}</div>
        <div className="diary__content">{diary.hydrate}</div>
        <div className="diary__content">{diary.quantityhydrate}</div>
        <div className="diary__content">{diary.exercise}</div>
        <div className="diary__content">{diary.meditation}</div>
        <div className="diary__content">{diary.earlywakeup}</div>
        <div className="diary__content">{diary.makethebed}</div>
        <div className="diary__content">{diary.cleanface}</div>
        <div className="diary__content">{diary.cleanteeth}</div>
        <div className="diary__content">{diary.shower}</div>
        <div className="diary__content">{diary.order}</div>
        <div className="diary__content">{diary.cleanhouse}</div>
        <div className="diary__content">{diary.changesheets}</div>
        <div className="diary__content">{diary.cooking}</div>
        <div className="diary__content">{diary.gotostreet}</div>
        <div className="diary__content">{diary.timetostreet}</div>
      </div>
    </>
  );
}

export default Diary;
