import React from "react";

import BaseLocale from "../../../locale/base"

const Directory = () => (
  <section className="home-directory">
    <h2 className="govuk-heading-l">{BaseLocale.homeHeaderTwo}</h2>
    <ul className="govuk-list govuk-list--bullet">
      <li>
        <a href={BaseLocale.filterLink}>{BaseLocale.filterTitle}</a>
      </li>
      <li>
        <a href={BaseLocale.transparencyLink}>{BaseLocale.transparencyTitle}</a>
      </li>
      <li>
        <a href={BaseLocale.reportLink}>{BaseLocale.reportTitle}</a>
      </li>
    </ul>
  </section>
);

export default Directory;
