import React, { Component } from "react";
import Spinner from "../../elements/Spinner/Spinner";

class RecordsTable extends Component {

  render() {
    return (
      <section className="results">
        {this.props.loading ? 
        <Spinner /> : 
        <table className="govuk-table">
          <thead className="govuk-table__head">
            <tr className="govuk-table__row">
              <th className="govuk-table__header" onClick={() => this.props.sortCallback('grantReference')}>
                Grant Reference
              </th>
              <th className="govuk-table__header" onClick={() => this.props.sortCallback('grantCall')}>
                Grant Call
              </th>
              <th className="govuk-table__header" onClick={() => this.props.sortCallback('classificationName')}>
                Classification
              </th>
              <th className="govuk-table__header" onClick={() => this.props.sortCallback('status')}>
                Status
              </th>
              <th className="govuk-table__header" onClick={() => this.props.sortCallback('paymentQuarter')}>
                Payment Quarter
              </th>
              <th className="govuk-table__header" onClick={() => this.props.sortCallback('predictedAmount')}>
                Actual Payment
              </th>
              <th className="govuk-table__header" onClick={() => this.props.sortCallback('country')}>
                Country
              </th>
              <th className="govuk-table__header" onClick={() => this.props.sortCallback('regionName')}>
                Region
              </th>
            </tr>
          </thead>
          <tbody className="govuk-table__body">
            {this.props.data.map(function(record, index) {
              return (
                <tr className="govuk-table__row" key={index}>
                  <td className="govuk-table__cell" data-title="Grant Reference">
                    {record.grantReference}
                  </td>
                  <td className="govuk-table__cell" data-title="Grant Call">
                    {record.grantCall}
                  </td>
                  <td className="govuk-table__cell" data-title="Classification">
                    {record.classificationName}
                  </td>
                  <td className="govuk-table__cell" data-title="Status">
                    {record.status}
                  </td>
                  <td className="govuk-table__cell" data-title="Status">
                    {record.paymentQuarter}
                  </td>
                  <td className="govuk-table__cell" data-title="Amount">
                    £{record.predictedAmount.toFixed(2)}
                  </td>
                  <td className="govuk-table__cell" data-title="Country">
                    {record.country}
                  </td>
                  <td className="govuk-table__cell" data-title="Region">
                    {record.regionName}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        }
        <a className="govuk-button" href="/dashboard">Export report</a>
      </section>
    );
  }
};

export default RecordsTable;
