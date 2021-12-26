import react from "react";
//import "../style/review_f.css";

function Review_F({ title, subtitle, image }) {
  return (
    <div className=" container">
      <div className="row mrgin_padding d-flex align-items-center mb-5 pb-5">
        <div className="col-6 mrgin_padding text-center ">
          <div>
            <h4>{title}</h4>
          </div>
          <div>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className="col-6 mrgin_padding text-center">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}
export default Review_F;
