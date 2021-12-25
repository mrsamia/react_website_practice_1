import react from "react";
import Pic4 from "../images/Pic4.jpg";

function Fcopy_itm({ Imge, ttle, sbtitle }) {
  return (
    <div>
      <div>
        <img src={require("../images/" + Imge)} />
      </div>

      <div>
        <h4>{ttle}</h4>
        <p>{sbtitle}</p>
      </div>
    </div>
  );
}
export default Fcopy_itm;
