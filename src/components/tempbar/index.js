import React, { Component } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import '../tempbar/index.css'
const options={
    chart: {
        type: 'areaspline',
        
      },
      title: {
        text: ' Temperature'
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
          text: ''
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
        name: 'Temperature',
        data: [0, 0.9, 1.5, 0.7, 3, 1.2, 2]
      }]
    
}

class BarChartTwo extends Component {
    render() {
        return (
            <div>
                <div className="row chartBar my-5">
                   <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
            </div>
        )
    }
}
export default BarChartTwo