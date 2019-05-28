import React from "react";
import Directory from "../../elements/Directory/Directory";

import BaseLocale from "../../../locale/base";

const Home = () => {
  return (
    <div className="govuk-width-container govuk-wider-container">
      <main className="govuk-main-wrapper " id="main-content" role="main">
        <h1 className="govuk-heading-xl">{BaseLocale.projectTitle}</h1>
        <h2 className="govuk-heading-m">{BaseLocale.projectTitleTwo}</h2>
        <Directory />
      </main>
    </div>
  )
}

export default Home;
