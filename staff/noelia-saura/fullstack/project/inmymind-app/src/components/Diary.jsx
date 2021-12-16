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

        <div className="diary__content">{diary.content}</div>
      </div>
    </>
  );
}

export default Diary;
