import React, { Component } from 'react'
import '../userdetails/index.css'
import backgroundimage from '../../assets/images/userimage.jpg'
import {RiTempHotFill} from 'react-icons/ri';
import {BsCloud} from 'react-icons/bs'


 class UserDetails extends Component {
constructor(props){
    super(props);
    this.state={
   title: this.props.title
    }
}
    render() {
        let {title}= this.state;
        return (
            <div>
                
                <div className="row mt-5 mx-4 userdetails" >
                    <div className="col-md-12 usercontent" style={{backgroundImage:`url(${backgroundimage})`, height: "250px", backgroundPosition: "center", backgroundSize:"cover", borderRadius:"29px" }}>
<h4> Hello, {title}! </h4>
<p >Welcome Home! The air quality is good & fresh you <br/> can go out today.</p>
<span className="grayclr">
<p><span className="degicon"> < RiTempHotFill size={25}/></span> <span className="degree">+ 25 &deg;C </span> Outdoor temperature</p>

                    <p> <BsCloud /> Fuzzy cloudy weather</p>
                    </span>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserDetails