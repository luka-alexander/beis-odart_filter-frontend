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
      <section className="filters col-12">
        <FilterDropdown title="Country">
          <FilterCheckboxes callback={this.props.locationCallback} />
        </FilterDropdown>

        <FilterDropdown title="Payment Quarter">
          <FilterRadios callback={this.props.callback} selector="quarter" data={Dates} dataKey="paymentQuarter" />
        </FilterDropdown>

        <FilterDropdown title="Grant">
          <FilterRadios callback={this.props.callback} selector="grant" data={Grants} dataKey="grantCall" />
        </FilterDropdown>

        <FilterDropdown title="Status">
          <FilterRadios callback={this.props.callback} selector="status" data={Statuses} dataKey="status" />
        </FilterDropdown>

        <button onClick={this.props.reset}>Clear all filters</button>
      </section>
    )  
  }
}

export default SearchBar;
