import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'
import {BiCalendar} from 'react-icons/bi'
import {AiOutlineRight} from 'react-icons/ai'

class PowerChart extends Component {
    render() {
        return (
            <div>
                <div className="row container-fluid ">
                <div className="col-md-12 mt-4 mx-3">
                      <div className="row mydevice">
                          <div className="col-md-6 pt-1">
                              <p> Power Consumed</p>
                          </div>
                          <div className="col-md-2">
                          <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
   <BiCalendar /> Month
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">OFF</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
                          </div>
                          <div className="col-md-2 ">
                              <button className="dropright"> <AiOutlineRight /> </button>
                          </div>

                      </div>
                  </div>
                </div>
            </div>
        )
    }
}
export default  PowerChart