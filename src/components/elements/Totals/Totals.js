import React from "react";

import BaseLocale from "../../../locale/base"

const Totals = (props) => {
  return(
    <section className="record-totals">
      {BaseLocale.totalGross}{props.totalFigure}
    </section>
  )
}

export default Totals;
