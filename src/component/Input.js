import react from "react";
import "../style/input.css";

function Input({ name = "", placeholder = "" }) {
  return (
    <div>
      <input name={name} placeholder={placeholder} />
    </div>
  );
}
export default Input;
