import React, { Component } from 'react'
import {IoWaterOutline} from 'react-icons/io5'
import {RiTempHotFill} from 'react-icons/ri';
import '../userheader/index.css'

 class UserHeader extends Component {
     constructor(props){
         super(props);
         this.state={
             title: this.props.title
         }
     }
    render() {
        let {title} = this.state
        return (
            <div>
                <div className="row userheader mx-4 mt-5">
                    <div className="col-md-3  pt-2">
                        <h4 className="userh">{title}'s Home</h4>
                    </div>
                    <div className="col-md-4 usericons">
                        <p><IoWaterOutline /> <span>35%</span> <span className="mx-3"><RiTempHotFill /> <span>15 &deg;C</span></span> <span>  <button
    class="buttonclr dropdown-toggle"
    type="button"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
    Living Room
  </button> </span></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserHeader