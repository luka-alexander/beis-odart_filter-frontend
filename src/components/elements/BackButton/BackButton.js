import React from "react";

import BaseLocale from "../../../locale/base"

const BackButton = () => (
  <a href="/" class="govuk-back-link">{BaseLocale.backText}</a>
);

export default BackButton;
