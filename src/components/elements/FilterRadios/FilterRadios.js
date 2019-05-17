import React, { Component } from "react";

class FilterRadios extends Component {

  handleChange = (event) => {
    this.props.callback(event.target.value, this.props.dataKey);
  }

  render() {
    return (
      <fieldset>
        {this.props.data.map((item, itemKey) => {
          return (
            <div key={itemKey} >
              <input type="radio" name="quarter" key={itemKey} onChange={this.handleChange} value={item.name} />
              <label>{item.name}</label>
            </div>
          )
      })}
      </fieldset>
    )        
  }
}

export default FilterRadios;
