import React, { Component } from 'react';
import ActivityData from "../../../data/BEIS-ODA-activities";

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
    console.log(ActivityData);
  }

  render() {
    return (
      <div className="govuk-width-container govuk-wider-container">   
        <main className="govuk-main-wrapper " id="main-content" role="main">
          <h1 className="govuk-heading-xl">Reporting</h1>
          <p className="govuk-body-lead">Export transparency reports</p>
          <br />
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <h2 className="govuk-heading-l">Activities</h2>
              <table className="govuk-table">
                <thead className="govuk-table__head">
                  <tr className="govuk-table__row">
                    <th className="govuk-table__header" scope="col">Activity Title</th>
                    <th className="govuk-table__header" scope="col">Status Code</th>
                    <th className="govuk-table__header" scope="col">Sector Name</th>
                    <th className="govuk-table__header" scope="col">Sector Code</th>
                    <th className="govuk-table__header" scope="col">Start Date</th>
                    <th className="govuk-table__header" scope="col">End Date</th>
                    <th className="govuk-table__header" scope="col">Country Name</th>
                    <th className="govuk-table__header" scope="col"></th>
                  </tr>
                </thead>
                <tbody className="govuk-table__body">
                  {ActivityData.map((item, key) => {
                    return (
                      <tr key={key} className="govuk-table__row">
                        <td className="govuk-table__cell">{item.title}</td>
                        <td className="govuk-table__cell">{item.activity_status_code}</td>
                        <td className="govuk-table__cell">{item.sector_name}</td>
                        <td className="govuk-table__cell">{item.sector_code}</td>
                        <td className="govuk-table__cell">{item.planned_activity_start_date}</td>
                        <td className="govuk-table__cell">{item.planned_activity_end_date}</td>
                        <td className="govuk-table__cell">{item.recipient_country_name}</td>
                        <td className="govuk-table__cell">
                          <a href="https://iati.cove.opendataservices.coop/media/9f3b5f30-9ea9-403f-936c-b6770bbf9af1/unflattened.xml" target="_blank" rel="noopener noreferrer">
                            create a new report
                          </a>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
  
              <div className="govuk-pagination--container">
                <ul className="govuk-pagination--pages">
                  <li className="govuk-pagination--back">&lt;</li>
                  <li className="govuk-pagination--page govuk-pagination--page--active">1</li>
                </ul>
              </div>

            </div>
  
          </div>
        </main>
      </div>
    )
  }
}


export default Transparency;