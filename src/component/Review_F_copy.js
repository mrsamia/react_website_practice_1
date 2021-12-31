import react from "react";
import Pic4 from "../images/Pic4.jpg";
function Left({ title, subtitle, image }) {
  return (
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-6 text-center">
          <div>
            <h4>{title}</h4>
          </div>
          <div>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}
function Right({ title, subtitle, image }) {
  return (
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-6 text-center">
          <img src={image} />
        </div>
        <div className="col-6 text-center">
          <div>
            <h4>{title}</h4>
          </div>
          <div>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function Review_F_copy({ condition, title, subtitle, image }) {
  if (condition) {
    return <Left title={title} subtitle={subtitle} image={image} />;
  }
  return <Right title={title} subtitle={subtitle} image={image} />;
}
export default Review_F_copy;
