import "./App.css";
import "./style/bootstrap.min.css";
import Nav from "./component/Nav";
import Header from "./component/Header";
import Button from "./component/Button";
import Pic3 from "./images/Pic3.jpg";
import Input from "./component/Input";
import Feature from "./component/Feature";
import HIW from "./data/HIW.json";
import BFP from "./data/BFP.json";
import Review_F from "./component/Review_F";
//import Fcopy_itm from "./component/Fcopy_itm";
//import Fcopy from "./component/Fcopy";

function App() {
  return (
    <div className="">
      <Nav />
      {/* first part */}
      <div className="first_part">
        <div className="container">
          <div className="row d-flex align-items-center vh-100">
            <div className="col-6  ">
              <Header header="Hand-Over Devices Guilt Free" />
              <h3>
                There is no greater injustice than an innocent man or woman
                serving time behind bars awareness, and making the world around
                us.
              </h3>
              <div>
                <div className="mrgin_padding d-flex align-items-start">
                  <Input name="username" placeholder="Enter your Name" />
                </div>
                <div className="mrgin_padding d-flex align-items-start ">
                  <Input name="email" placeholder="Enter your Email" />
                </div>
                <div className="mrgin_padding d-flex align-items-start">
                  <Button name="Be The First To Try" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <img
                className="rounded"
                src={Pic3}
                height="600px"
                width="850px"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Second part */}
      <Feature
        title={HIW.title}
        subtitle={HIW.subTitle}
        itmsAb={HIW.items}
        className="mt-5 mb-4"
      />

      <Feature
        title={BFP.title}
        subtitle={BFP.subTitle}
        itmsAb={BFP.items}
        className="third_part pt-5"
      />
      <Review_F
        isGoal={false}
        title="Quis duis incididunt."
        subtitle="Lorem laborum voluptate aliqua mpidatat pariatur laboris officia ullamco ipsum non dolore. Deserunt ut dolore officia amet commodo et dolore pariatur sint in nostrud."
        image={require("./images/Pic6.jpg")}
      />
      <Review_F
        isGoal={true}
        title="Quis duis incididunt."
        subtitle="Lorem laborum voluptate aliqua mpidatat pariatur laboris officia ullamco ipsum non dolore. Deserunt ut dolore officia amet commodo et dolore pariatur sint in nostrud."
        image={require("./images/Pic6.jpg")}
      />
    </div>
  );
}

export default App;
