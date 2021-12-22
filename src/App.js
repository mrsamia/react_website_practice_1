import "./App.css";
import "./style/bootstrap.min.css";
import Nav from "./component/Nav";
import Header from "./component/Header";
import Button from "./component/Button";
import Pic1 from "./images/Pic1.jpg";
import Input from "./component/Input";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className=" container ">
        <div className="row d-flex align-items-center  mrgin_padding">
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
            <img src={Pic1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
