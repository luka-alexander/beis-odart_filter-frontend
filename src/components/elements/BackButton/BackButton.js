import React from "react";

import BaseLocale from "../../../locale/base"

const BackButton = () => (
  <div className="col-12">
    <a className="back-button" href="/">
      <span>{BaseLocale.backText}</span>
    </a>
  </div>
);

export default BackButton;
