import React, { Component } from 'react';
import { Scatter } from 'react-chartjs-2';

export default class Chart extends Component {

  state = {
    chartData: []
  }

  componentDidMount() {
    let chartData = [];
    for(let dataCounter = 0; dataCounter < this.props.data.length; dataCounter++) {
      let json = {x: this.props.data[dataCounter].grossAmount, y: this.props.data[dataCounter].grossAmount};
      chartData.push(json)
    }

    setTimeout( () => {
      this.setState({
        chartData
      });
    }, 500)
  }

  scatterChartData = {
    datasets: [{
      label: 'My First dataset',
      borderColor: "red",
      backgroundColor: "#cb2026",
      data: this.state.chartData
    }]
  };

  options = {
    title: {
      display: true,
      text: 'Chart.js Scatter Chart'
    }
  }

  
  render() {
    return (
      <div className="col-12">
        <section className="dashboard">
          <Scatter data={this.scatterChartData} options={this.options} />
        </section>
      </div>
    );
  }
};