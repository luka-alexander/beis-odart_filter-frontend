import React from "react";
import DoughnutChart from "../../elements/DoughnutChart/DoughnutChart";
import LineChart from "../../elements/LineChart/LineChart";

import BaseLocale from "../../../locale/base"
import BackButton from "../../elements/BackButton/BackButton";

const Report = () => {
  return (
    <div className="govuk-width-container govuk-wider-container">
      <main className="govuk-main-wrapper" id="main-content" role="main">
        <BackButton url="/filter" />
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <h1 className="govuk-heading-xl">{BaseLocale.reportPageTitle}</h1>
            <div className="govuk-caption-m">{BaseLocale.reportCaptionHeader}</div>
            <div className="govuk-heading-m">{BaseLocale.reportSubcaptionHeader}</div>
          </div>
          <div className="govuk-grid-column-one-third">
            <div className="panel-blue">
              <div className="govuk-caption-m">{BaseLocale.reportBlock1Header}</div>
              <div className="govuk-heading-l">{BaseLocale.reportBlock1Content}</div>
            </div>
          </div>
          <div className="govuk-grid-column-one-third">
            <div className="panel-blue">
              <div className="govuk-caption-m">{BaseLocale.reportBlock2Header}</div>
              <div className="govuk-heading-l">{BaseLocale.reportBlock2Content}</div>
            </div>
          </div>
          <div className="govuk-grid-column-one-third">
     
          </div>
          <div className="govuk-grid-column-full">
            <LineChart />
          </div>
          <div className="govuk-grid-column-two-thirds">
            <DoughnutChart />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Report;
