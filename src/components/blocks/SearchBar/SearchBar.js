import React, { Component } from "react";

import FilterDropdown from "../../elements/FilterDropdown/FilterDropdown";
import FilterRadios from "../../elements/FilterRadios/FilterRadios";
import FilterCheckboxes from "../../elements/FilterCheckboxes/FilterCheckboxes";

import Dates from "../../../data/BEIS-ODA-quarters";
import Grants from "../../../data/BEIS-ODA-grant";
import Statuses from "../../../data/BEIS-ODA-statuses";

class SearchBar extends Component {
  render() {
    return (
      <section className="filters">
        <FilterDropdown title="Country">
          <FilterCheckboxes callback={this.props.filterCallback} dataKey="country" />
        </FilterDropdown>

        <FilterDropdown title="Payment Quarter">
          <FilterRadios callback={this.props.filterCallback} data={Dates} dataKey="paymentQuarter" />
        </FilterDropdown>

        <FilterDropdown title="Grant">
          <FilterRadios callback={this.props.filterCallback} data={Grants} dataKey="grantCall" />
        </FilterDropdown>

        <FilterDropdown title="Status">
          <FilterRadios callback={this.props.filterCallback} data={Statuses} dataKey="status" />
        </FilterDropdown>

        <button className="govuk-button" onClick={this.props.reset}>
          Clear all filters
        </button>
      </section>
    )  
  }
}

export default SearchBar;
