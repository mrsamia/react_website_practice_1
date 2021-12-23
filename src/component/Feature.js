import react from "react";
//import "../style/feature_item.css";
import Feature_item from "./Feature_item";
import Header from "./Header";

function Feature({ title = "", subtitle = "", items = [], className = "" }) {
  return (
    <div className={className}>
      <div className="container">
        <div className="mrgin_padding text-center">
          <Header header={title} />
          <h3>{subtitle}</h3>
        </div>
        <div className="row">
          {items.map((item) => (
            <div className="col-4">
              <Feature_item
                image={item.img}
                title={item.title}
                subtitle={item.subTitle}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Feature;
