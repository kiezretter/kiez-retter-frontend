import React from "react";
import { ClipLoader } from "react-spinners";

import "./Loader.scss";

const Loader = () => (
  <div className="container">
    <ClipLoader size={110} css={{ borderWidth: "1rem" }} color="#123abc" loading />
  </div>
);

export default Loader;