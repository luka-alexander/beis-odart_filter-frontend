import React from 'react';

const BetaBanner = () => (
  <div className="app-phase-banner__wrapper">
    <div className="govuk-phase-banner app-phase-banner govuk-width-container govuk-wider-container">
      <p className="govuk-phase-banner__content">
        <strong className="govuk-tag govuk-phase-banner__content__tag ">
          alpha
        </strong>
        <span className="govuk-phase-banner__text">
          This is a new service – your feedback will help us to improve it.
        </span>
      </p>
    </div>
  </div>
);

export default BetaBanner;