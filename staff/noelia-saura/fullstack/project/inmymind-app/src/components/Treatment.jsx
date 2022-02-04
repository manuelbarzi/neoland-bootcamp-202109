import logger from "../logger";
import { deleteTreatment } from "../logic";
import "./Treatment.sass";

function Treatment({treatment, deleteTreatment,showDelete }) {
  logger.debug("Treatment->render");
    

  const doDeleteTreatment= () => {
    deleteTreatment(treatment.id)
  }

  return (
    <>

      <div className="treatment">
        <div className="treatment__title">
          <div className="treatment__title__actions">
          {showDelete && <div className="treatment__title__actions__button">
              <button onClick={doDeleteTreatment} >
                <img src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png" />
              </button>
            </div>}
          </div>
        </div>
        <div className="treatment__content">{treatment.content}</div>
      </div>

      
    </>
    
  );
}

export default Treatment;
