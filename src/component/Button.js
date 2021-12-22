import react from "react";
import "../style/button.css";

function Button({ name }) {
  return (
    <div>
      <button className="btn_style">{name}</button>
    </div>
  );
}
export default Button;
