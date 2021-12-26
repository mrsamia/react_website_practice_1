import react from "react";
import Fcopy_itm from "./Fcopy_itm";
import Header from "./Header";
//Its a copy of Feature.
//just for practice.
//another way

function Fcopy({ Imge, ttle = "", sbtitle = "", items = [] }) {
  return (
    <div>
      <div>
        <Header header="How it works?" />
      </div>
      <div>
        <h4>Culpa deserunt est esse in mollit quis.</h4>
      </div>
      <div className="row">
        <div className="col-4">
          <Fcopy_itm
            Imge={items[0].img}
            ttle={items[0].title}
            sbtitle={items[0].subTitle}
          />
        </div>
        <div className="col-4">
          <Fcopy_itm
            Imge={items[1].img}
            ttle={items[1].title}
            sbtitle={items[1].subTitle}
          />
        </div>
      </div>
    </div>
  );
}
export default Fcopy;
