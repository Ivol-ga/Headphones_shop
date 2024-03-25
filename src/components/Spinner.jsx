import React from "react";
// import style from "../SASS/style.sass";

function Spinner() {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
export { Spinner };
