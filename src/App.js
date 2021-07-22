import React, { Component } from 'react'
import Button from './components/buttons';
import Header from './components/header'
import UserDetails from './components/userdetails'
import UserHeader from './components/userheader';
import './App.css'
import AsideMydevice from './components/asideMyDevice';
import AsideMembers from './components/asideMembers';
import PowerChart from './components/chartpowerconsume';
import SideNav from './components/sidenav';
import BarChart from './components/barchart';
import BarChartTwo from './components/tempbar';
import BarChartThree from './components/lampbar';
import RoomTemp from './components/roomtemp';

 class App extends Component {
  constructor(props){
    super(props);
    this.state={
        title:"Scarlett"
    }
}
  render() {
    return (
      <div >
        <div className="row scroll">
          <div className="col-md-1">
< SideNav />
          </div>
<div className="col-md-11">
<div className="row ">
<div className="col-md-12">
  < Header title={this.state.title} />
</div>
<div className="row">
  <div className="col-md-8">
    < UserDetails title={this.state.title} />
    <div className ="row">
      <div className="col-md-12">
        < UserHeader title={this.state.title}/>
      </div>
    </div>
    <div className="row">
     <div className="col-md-12">
       < Button />
       </div> 
    </div>
    <div className="row">
      <div className="col-md-12">
      <RoomTemp />
      </div>
    </div>
  </div>
  <div className="col-md-4 mt-5 forbackground">
    <div className="row">
      <div className="col-md-12">
        < AsideMydevice />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        < AsideMembers />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        < PowerChart />
      </div>
    </div>
    <div className="row chartone">
      <div className="col-md-12">
        <BarChart />
      </div>
    </div>
    {/* <div className="row chartone">
      <div className="col-md-12">
        <BarChartTwo />
      </div>
    </div>
    <div className="row chartone">
      <div className="col-md-12">
        < BarChartThree />
              </div>
    </div> */}
  </div>
</div>
        </div>


</div>
</div>

      </div>
    )
  }
}
export default App