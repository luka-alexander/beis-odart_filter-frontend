import React, { Component } from 'react';
import BackButton from '../../elements/BackButton/BackButton';

import BaseLocale from "../../../locale/base";

class Transparency extends Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    try {
      const response = await fetch(`https://iati-export-api01.herokuapp.com/api/activity_json/?format=json`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="govuk-width-container govuk-wider-container">   
        <main className="govuk-main-wrapper " id="main-content" role="main">
          <BackButton />
          <h1 className="govuk-heading-xl">{BaseLocale.transparencyTitle}</h1>
          <h2 className="govuk-heading-m">{BaseLocale.transparencySubtitle}</h2>
          <br />
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <p className="govuk-text">{BaseLocale.transparencyBodyContent}</p>
              <a className="govuk-button" href="https://iati.cove.opendataservices.coop/media/81ce4095-99c3-4540-8c07-e5e54933f899/unflattened.xml" target="_blank" rel="noopener noreferrer">
                {BaseLocale.generateReport}
              </a>
            </div>
  
          </div>
        </main>
      </div>
    )
  }
}


export default Transparency;