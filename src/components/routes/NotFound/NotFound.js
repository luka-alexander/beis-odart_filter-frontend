import React from "react";

import BaseLocale from "../../../locale/base";

const NotFound = () => {
  return (
    <div className="govuk-width-container govuk-wider-container">
      <main className="govuk-main-wrapper " id="main-content" role="main">
        <h1 className="govuk-heading-xl">{BaseLocale.notFoundTitle}</h1>
        <p className="govuk-body-lead">{BaseLocale.notFoundSubtitle}</p>
      </main>
    </div>
  )
}

export default NotFound;
