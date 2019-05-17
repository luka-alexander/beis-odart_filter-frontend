import React, { Component } from "react";
import BackButton from "../../elements/BackButton/BackButton";
import RecordsTable from "../../elements/RecordsTable/RecordsTable";

import SampleData from "../../../data/BEIS-ODA-tracker";

class Order extends Component {
  state = {
    allData: [],
    currentData: [],
    currentPage: null,
    totalPages: null,
    loading: false
  };

  componentDidMount() {
    this.setState({ allData: SampleData });
  }

  compareBy = (key) => {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  onSort = (key) => {
    let dataCopy = [...this.state.allData];
    dataCopy.sort(this.compareBy(key));
    this.setState({
      allData: dataCopy
    });
  }

  render() {

    return (
      <div className="row">

        <BackButton />

        <div className="col-12">
          <h2>
            <strong>{this.state.allData.length}</strong>{" "}
            {this.state.allData.length > 1 ? "Records" : "Record"}
          </h2>
        </div>

        <RecordsTable sortCallback={this.onSort} data={this.state.allData} />

      </div>
    )
  }
}

export default Order;
