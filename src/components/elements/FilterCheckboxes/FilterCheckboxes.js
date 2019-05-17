import React, { Component } from "react";
import Locations from "../../../data/BEIS-ODA-IATI-locations";

class FilterCheckboxes extends Component {

  // Send event to callback prop when checkbox selected
  handleChange = (event) => {
    this.props.callback(event.target.value);
  }

  render() {
    return (
      <React.Fragment>
        {Locations.map((region, regionKey) => {
          return (
            <div key={regionKey} className="col-12 filter-category-wrapper">
              <span className="category-title">{region.region}</span>
              <div className="filter-item-wrapper">
              {region.countries.map((country, countryKey) => {
                return (
                  <fieldset key={countryKey}>
                    <input onChange={this.handleChange} value={country.country} type="checkbox" name={countryKey} />
                    <label htmlFor={countryKey}>{country.country}</label>
                  </fieldset>
                )
              })}
              </div>
            </div>
          )
        })}
      </React.Fragment>
    )
  }

}

export default FilterCheckboxes;
