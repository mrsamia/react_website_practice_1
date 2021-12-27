import react from "react";
import Pic6 from "../images/Pic6.jpg";
//import "../style/review_f.css";

// function Review_F({ title, subtitle, image}) {
//   return (
//     <div className=" container">
//       <div className="row mrgin_padding d-flex align-items-center mb-5 pb-5">
//         <div className="col-6 mrgin_padding text-center ">
//           <div>
//             <h4>{title}</h4>
//           </div>
//           <div>
//             <p>{subtitle}</p>
//           </div>
//         </div>
//         <div className="col-6 mrgin_padding text-center">
//           <img src={image} />
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Review_F;

function MissedGoal({ title, subtitle, image }) {
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

function MadeGoal({ title, subtitle, image }) {
  return (
    <div className=" container">
      <div className="row mrgin_padding d-flex align-items-center mb-5 pb-5">
        <div className="col-6 mrgin_padding text-center ">
          <img src={image} />
        </div>
        <div className="col-6 mrgin_padding text-center">
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

function Review_F({ isGoal, title, subtitle, image }) {
  if (isGoal) {
    return <MadeGoal title={title} subtitle={subtitle} image={image} />;
  }
  return <MissedGoal title={title} subtitle={subtitle} image={image} />;
}
export default Review_F;
