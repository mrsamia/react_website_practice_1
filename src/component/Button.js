import react from "react";
import "../style/button.css";

function Button({ name, style }) {
  return (
    <div>
      <button style={style} className="btn_style">
        {name}
      </button>
    </div>
  );
}
export default Button;
