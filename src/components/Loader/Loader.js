import React from "react";
import { ClipLoader } from "react-spinners";

import "./Loader.scss";

const Loader = () => (
  <div className="container">
    <div><ClipLoader size={110} css={{ borderWidth: "1rem" }} color="#123abc" loading /></div>
    <div><h3>Das Hochladen der Dateien kann bis zu 5 Minuten dauern. Bitte schließe das Fenster nicht.</h3></div>
  </div>
);

export default Loader;