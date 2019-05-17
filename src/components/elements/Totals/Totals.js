import React from "react";

import BaseLocale from "../../../locale/base"

const Totals = (props) => {
  return(
    <div className="col-12">
      <section className="record-totals">
        {BaseLocale.totalGross}{props.totalFigure}
      </section>
    </div>
  )
}

export default Totals;
