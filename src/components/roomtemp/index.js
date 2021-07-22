import React from 'react';
import Highcharts from 'highcharts';
import '../roomtemp/index.css'
import {GiElectric} from 'react-icons/gi'
import {FormCheck} from 'react-bootstrap'
class RoomTemp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name: 'Room Temperature',
                data: [
                    {
                      name: 'Temperature',
                      y: 25,
                      color: '#2ecc71'
                    },
                  
                ]
            }]
        }
    }

    highChartsRender() {
        Highcharts.chart({
            chart: {
              type: 'pie',
              renderTo: 'atmospheric-composition',
              style: {
height: 'auto',
              }
            },
            title: {
              verticalAlign: 'middle',
              floating: true,
              text: '25 ° <br/> colcious',
              style: {
                fontSize: '23px',
              }
            },
            plotOptions: {
              pie: {
                dataLabels: {
                    // format: '{point.name}: {point.percentage:.1f} %'
                },
                innerSize: '70%'
              }
            },
            series: this.state.series
        });
    }

    componentDidMount() {
        this.highChartsRender();
    }

   	render() {
       	return (
            <div className="roomtembox  mx-4 mt-5">
              <div className="col-md-12">
                  <div className="row  roomtem">
                    <div className="col-md-11">
                      <p> <span><GiElectric /></span> Living Room Temperature</p>
                    </div>
                    <div className="col-md-1" >
                    <FormCheck type="switch" id="custom-switch-room" />
                    </div>
                    
                    </div>
                <div className="row forheight">
                  <div className="col-md-1 my-auto pl-4">
<button className="roombtn"> +</button>
                  </div>
                      <div className="col-md-10" >
                        <div id="atmospheric-composition">

                        </div>
                      </div>
                      <div className="col-md-1 my-auto">
<button className="roombtn">-</button>
                  </div>
              </div>
            </div>
            </div>
       	);
   	}
}

export default RoomTemp;
