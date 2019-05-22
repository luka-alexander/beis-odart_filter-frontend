import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class LineChart extends Component {

  data= {
    labels: ['2017/18 Q1', '2017/18 Q2', '2017/18 Q3', '2017/18 Q4', '2018/19 Q1', '2018/19 Q2', '2018/19 Q3'],
    datasets: [{
      label: 'Predicted',
      borderColor: "#3a3aae",
      backgroundColor: "#3a3aae",
      data: [
        27500,
        34275,
        25960,
        24123,
        47626,
        16384,
        18273
      ]
    }, {
      label: 'Actual',
      borderColor: "#ffae31",
      backgroundColor: "#ffae31",
      data: [
        25910,
        31932,
        19300,
        23780,
        42819,
        17382,
        18908
      ]
    }]
  }

  options= {
    responsive: true,
    title: {
      display: true,
      text: 'Actuals vs Predicted'
    },
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Quarter'
        }
      }],
      yAxes: [{
        stacked: true,
        scaleLabel: {
          display: true,
          labelString: 'Amount'
        }
      }]
    }
  }

  render() {
    return (
      <div className="chart-container">
        <Line data={this.data} options={this.options} />
      </div>
    );
  }
};