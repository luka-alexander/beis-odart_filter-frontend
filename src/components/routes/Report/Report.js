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
            <div className="govuk-caption-m">Relevant Quarter</div>
            <div className="govuk-heading-m">2017-2018 Q3</div>
          </div>
          <div className="govuk-grid-column-one-third">
            <div className="panel-blue">
              <div className="govuk-caption-m">Actual spend</div>
              <div className="govuk-heading-l">£470,850</div>
            </div>
          </div>
          <div className="govuk-grid-column-one-third">
            <div className="panel-blue">
              <div className="govuk-caption-m">Budget difference</div>
              <div className="govuk-heading-l">-£67,950</div>
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
