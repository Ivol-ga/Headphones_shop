import React from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <Link to={"/"} className="btn">
      На главную
    </Link>
  );
}
export { Button };
