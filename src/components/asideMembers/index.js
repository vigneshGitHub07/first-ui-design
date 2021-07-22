import React, { Component } from 'react'
import {AiOutlineRight} from 'react-icons/ai'
import '../asideMembers/index.css'
import {FaUserCircle} from 'react-icons/fa'

class AsideMembers extends Component {
    render() {
        return (
            <div>
                <div className="row for ">
                    <div className="col-md-12 pt-5 pl-4">
                        <div className="row mydevice container-fluid">
                        <div className="col-md-6 pt-1 ">
                              <p> Members</p>
                          </div>
                          <div className="col-md-2 pt-1">
                              <button className="dropright "> <AiOutlineRight /> </button>
                          </div>
                        </div>
                  
                    </div>
                    <div className="row pl-4 ">
                        <div className="col-md-12 member">
                            <div className="row memberrow">
                        <div className="col-md-2 members">
<FaUserCircle size={30}/>
<p className="mt-2">Shortlist</p>
<p className="access">Action</p>
                        </div>
                        <div className="col-md-2  members">
<FaUserCircle size={30}/>
<p className="mt-2">Naziya</p>
<p className="access">Full Access</p>
                        </div>
                        <div className="col-md-2 members">
<FaUserCircle size={30}/>
<p className="mt-2">Riya</p>
<p className="access">Full Access</p>
                        </div>
                        <div className="col-md-2 members">
<FaUserCircle size={30}/>
<p className="mt-2">Dad</p>
<p className="access">Full Access</p>
                        </div>
                        <div className="col-md-2 members">
<FaUserCircle size={30}/>
<p className="mt-2">Mom</p>
<p className="access">Full Access</p>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AsideMembers
