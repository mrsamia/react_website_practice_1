import react from "react";
//import "../style/feature_item.css";
import Feature_item from "./Feature_item";
import Header from "./Header";

function Feature({ title = "", subtitle = "", itmsAb = [], className = "" }) {
  return (
    <div className={className}>
      <div className="container">
        <div className="mrgin_padding text-center">
          <Header className="mrgin_padding" header={title} />
          <h3 className="mrgin_padding">{subtitle}</h3>
        </div>
        <div className="row mrgin_padding ">
          {itmsAb.map((item) => (
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
