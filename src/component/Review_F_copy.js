import react from "react";
import Pic4 from "../images/Pic4.jpg";
function Review_F_copy() {
  return (
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-6 text-center">
          <div>
            <h4>Quis duis incididunt.</h4>
          </div>
          <div>
            <p>
              Lorem laborum voluptate aliqua mpidatat pariatur laboris officia
              ullamco ipsum non dolore. Deserunt ut dolore officia amet commodo
              et dolore pariatur sint in nostrud.
            </p>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <img src={require("../images/Pic4.jpg")} />
        </div>
      </div>
    </div>
  );
}
export default Review_F_copy;
