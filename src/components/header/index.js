import React, { Component } from 'react'
import {BsSearch} from 'react-icons/bs'
import{FiSettings} from 'react-icons/fi'
import {AiOutlineBell} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa' 
import '../header/index.css'


 class Header extends Component {
     constructor(pros){
         super(pros);
         this.state={
             title:this.props.title
         }
     }
    render() {
        let {title}=this.state
        return (
            <div>
                <div className="row mt-5 container-fluid header">
                    <div className="col-md-3 mx-5 search">
                    <div class="input-group rounded">
                    <span class="input-group-text border-0" id="search-addon">
    <BsSearch />
  </span>
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
    aria-describedby="search-addon" />
  
</div>
                    </div>
                    <div className="col-md-2 usersettings">
                        <span className="mx-2">< FiSettings size= {24}/></span>
                        <span className="mx-2">< AiOutlineBell size= {24} /></span>
                        <span className="mx-2">< FaUserCircle size= {24} /></span>
                        
                        
                        
        
  <button
    class="btn btn-primary dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
    {title}
  </button>

                    </div>
                </div>
            </div>
        )
    }
}
export default Header