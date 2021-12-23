import react from "react";
//import "../style/feature_item.css";

function Feature_item({ image, title, subtitle }) {
  return (
    <div>
      <div>
        <img className="w-100 mb-3" src={require("../images/" + image)} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
export default Feature_item;
