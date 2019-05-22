import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

export default class DoughnutChart extends Component {

  data = {
    datasets: [{
      data: [1, 3, 3, 4, 6, 7, 8, 8, 9, 11, 13, 15, 15, 17],
      backgroundColor: [
        "#169b58",
        "#f03b88",
        "#7316ca",
        "#4894da",
        "#df0840",
        "#2F4F4F",
        "#2b2228",
        "#FFFF99",
        "#FF4500",
        "#169b58",
        "#f03b88",
        "#7316ca",
        "#4894da"
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Egypt',
      'Mexico',
      'Sudan',
      'Bolivia',
      'Chile',
      'Iran',
      'China',
      'Viet Nam',
      'Mozambique',
      'Tajikistan',
      'Yemen',
      'Malawi',
      'Zambia',
      'Kenya'
    ]
  };

  options = {
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    title: {
      display: true,
      text: 'Funds by Country'
    },
    plugins: {
      datalabels: {
          formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map(data => {
                  sum += data;
              });
              let percentage = (value*100 / sum).toFixed(2)+"%";
              return percentage;
          },
          color: '#fff',
      }
    }
  }

  
  render() {
    return (
      <div className="chart-container">
        <Doughnut data={this.data} options={this.options} />
      </div>
    );
  }
};