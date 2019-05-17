import React, { Component } from "react";
import Spinner from "../../elements/Spinner/Spinner";

class RecordsTable extends Component {

  render() {
    return (
      <section className="results">
        <div className="col-12">
          {this.props.loading ? 
          <Spinner /> : 
          <table className="m-table">
            <thead>
              <tr>
                <th onClick={() => this.props.sortCallback('classificationName')}>Classification Name</th>
                <th onClick={() => this.props.sortCallback('grantReference')}>Grant Reference</th>
                <th onClick={() => this.props.sortCallback('paymentQuarter')}>Payment Quarter</th>
                <th onClick={() => this.props.sortCallback('paymentStatus')}>Payment Status</th>
                <th onClick={() => this.props.sortCallback('paymentDate')}>Payment Date</th>
                <th onClick={() => this.props.sortCallback('grossAmount')}>RC Gross Amount</th>
                <th onClick={() => this.props.sortCallback('country')}>Country</th>
                <th onClick={() => this.props.sortCallback('regionName')}>Region</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map(function(record, index) {
                return (
                  <tr key={index}>
                    <td data-title="Classification">{record.classificationName}</td>
                    <td data-title="Grant Reference">
                      {record.grantReference}
                      {/* <FontAwesomeIcon className="right-icon" icon={faInfoCircle}/> */}
                    </td>
                    <td data-title="Quarter">{record.paymentQuarter}</td>
                    <td data-title="Status">{record.paymentStatus}</td>
                    <td data-title="Date">{record.paymentDate}</td>
                    <td data-title="Amount">£{record.grossAmount.toFixed(2)}</td>
                    <td data-title="Country" className="cell-country">{record.country}</td>
                    <td data-title="Region" className="cell-region">{record.regionName}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          }
        </div>
      </section>
    );
  }
};

export default RecordsTable;
