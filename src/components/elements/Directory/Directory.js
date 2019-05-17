import React from "react";

import BaseLocale from "../../../locale/base"

const Directory = () => (
  <section className="home-directory">
    <h2>{BaseLocale.homeHeaderTwo}</h2>
    <ul>
      <li>
        <a href={BaseLocale.searchLink}>{BaseLocale.searchTitle}</a>
      </li>
      <li>
        <a href={BaseLocale.orderLink}>{BaseLocale.orderTitle}</a>
      </li>
    </ul>
  </section>
);

export default Directory;
