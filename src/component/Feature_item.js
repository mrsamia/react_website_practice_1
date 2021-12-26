import react from "react";
//import "../style/feature_item.css";

function Feature_item({ image, title, subtitle }) {
  return (
    <div>
      <div>
        <img
          className="w-90 mb-4 pt-5 rounded-circle"
          src={require("../images/" + image)}
        />
      </div>
      <div className="mb-5 pb-5">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
export default Feature_item;
