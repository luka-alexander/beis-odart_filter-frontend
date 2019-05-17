import React from "react";
import Directory from "../../elements/Directory/Directory";

import BaseLocale from "../../../locale/base"

const Home = () => {
  return (
    <div className="row">
      <div className="col-6">
        <h1>{BaseLocale.projectTitle}</h1>
        <p>{BaseLocale.projectSubtitle}</p>
        <Directory />
      </div>
    </div>
  )
}

export default Home;
