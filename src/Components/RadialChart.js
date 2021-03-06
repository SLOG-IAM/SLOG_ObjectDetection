import React, { Component } from "react";
import Chart from "react-apexcharts";


class RadialChart extends React.Component {
      
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['국어', '수학', '영어', '과학'],
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249
              }
            }
          }
        }
      },
      series: [43, 55, 67, 83],
    }
  }

  render() {
    return (
      <div>
        <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="radialBar" height="200" />
        </div>
        <div id="html-dist">
        </div>
      </div>
    );
  }
}

export default RadialChart;