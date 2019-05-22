import React, { Component } from "react";

import BaseLocale from "../../../locale/base"

class BackButton extends Component {

  render() {
    let url = "";
    this.props.url ? url = this.props.url : url = "/";
    return (<a href={url} className="govuk-back-link">{BaseLocale.backText}</a>)
  }
}

export default BackButton;
