import React, { Component } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import '../barchart/index.css'
const options={
    chart: {
        type: 'areaspline'
      },
      title: {
        text: ' Electricity consumed'
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
      },
      xAxis: {
        categories: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        plotBands: [{ // visualize the weekend
          from: 4.5,
          to: 6.5,
          color: 'rgba(68, 170, 213, .2)'
        }]
      },
      yAxis: {
        categories: [
            '0',
            '25%',
            '50%',
            '75%',
          ],
        title: {
          text: 'Fruit units'
        }
      },
    //   tooltip: {
    //     shared: true,
    //     valueSuffix: ' units'
    //   },
    //   credits: {
    //     enabled: false
    //   },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5
        }
      },
      series: [{
        name: 'Electricity',
        data: [0, 0.5, 2.5, 0.3, 3, 2.5, 2.9]
      }]
    
}

class BarChart extends Component {
    render() {
        return (
            <div>
                <div className="row chartBar">
                  <div className="col-md-12">
                  <HighchartsReact highcharts={Highcharts} options={options} />
                  </div>
                   
                </div>
            </div>
        )
    }
}
export default BarChart