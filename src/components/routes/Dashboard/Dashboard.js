import React from "react";
import DoughnutChart from "../../elements/DoughnutChart/DoughnutChart";
import LineChart from "../../elements/LineChart/LineChart";

import BaseLocale from "../../../locale/base"

const Dashboard = () => {
  return (
    <div className="govuk-width-container govuk-wider-container">
      <main className="govuk-main-wrapper " id="main-content" role="main">
        <div class="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <h1 className="govuk-heading-xl">{BaseLocale.dashboardPageTitle}</h1>
            <p className="govuk-body-lead">{BaseLocale.dashboardSubTitle}</p>
          </div>
          <div class="govuk-grid-column-full">
            <div class="govuk-caption-m">This period's deadline</div>
            <div class="govuk-heading-m">30 Jun 2017</div>
          </div>
          <div class="govuk-grid-column-one-third">
            <div class="panel-blue">
            <div class="govuk-caption-m">Trackers submitted</div>
            <div class="govuk-heading-l"><span>34</span> of <span>36</span></div>
            </div>
          </div>
          <div class="govuk-grid-column-one-third">
            <div class="panel-blue">
            <div class="govuk-caption-m">Total spend</div>
            <div class="govuk-heading-l">£15,590,000</div>
            </div>
          </div>
          <div class="govuk-grid-column-one-third">
            <div class="panel-blue">
              <div class="govuk-caption-m">Budget v forecast</div>
              <div class="govuk-heading-l"><span>-</span> <span>£1,105,000</span></div>
            </div>
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

export default Dashboard;
