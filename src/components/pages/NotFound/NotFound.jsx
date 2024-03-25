import React from "react";
import style from "../../../SASS/style.sass";
import { Button } from "../../Button";
import notFound from "./img/ic-notfound.svg";

function NotFound() {
  return (
    <div className={"notFound"}>
      <img src={notFound} className={"image"} alt="" aria-hidden="true" />
      <h2 className={"notFound__title"}>Страница не найдена</h2>
      <Button />
    </div>
  );
}
export { NotFound };
