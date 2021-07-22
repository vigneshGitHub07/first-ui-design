import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'
import {AiOutlineRight} from 'react-icons/ai'
import '../asideMyDevice/index.css'
import {FormCheck} from 'react-bootstrap'
import {RiFridgeLine} from 'react-icons/ri'
import {GiBedLamp} from 'react-icons/gi'
import {GiMusicSpell} from 'react-icons/gi'
import {GiWifiRouter}from 'react-icons/gi'

 class AsideMydevice extends Component {
    render() {
        return (
            <div>
              <div className="row container-fluid ">
                  <div className="col-md-12 mt-3 mx-3">
                      <div className="row mydevice">
                          <div className="col-md-6 pt-1">
                              <p> My Device</p>
                          </div>
                          <div className="col-md-1">
                          <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    ON
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
                  <div className="row aside">
                      <div className="col-md-5 pl-5 asideBoxOne">
                      <div className="row ">
                            <div className="col-md-5 pt-5">
                                < RiFridgeLine size={ 42}/>
                            </div>
                            <div className="col-md-2 pt-5">
                                <p>ON</p>
                            </div>
                            <div className="col-md-3 pt-5">
                            <FormCheck type="switch" id="custom-switch-aside" />
                            </div>
                        </div>
                        <div className="row pt-3 pl-3">
                            <p>Refridgerator</p>
                        </div>
                      </div>
                      <div className="col-md-5 pl-5 asideBoxTwo">
                      <div className="row ">
                            <div className="col-md-5 pt-5">
                                < GiWifiRouter size={ 42}/>
                            </div>
                            <div className="col-md-2 pt-5">
                                <p>ON</p>
                            </div>
                            <div className="col-md-3 pt-5">
                            <FormCheck type="switch" id="custom-switch-asidetwo" />
                            </div>
                        </div>
                        <div className="row pt-3 pl-3">
                            <p>Router</p>
                        </div>
                      </div>    
                  </div>
                  <div className="row aside ">
                      <div className="col-md-5 pl-5 asideBoxThree">
                      <div className="row ">
                            <div className="col-md-5 pt-5">
                                < GiMusicSpell size={ 42}/>
                            </div>
                            <div className="col-md-2 pt-5">
                                <p>ON</p>
                            </div>
                            <div className="col-md-3 pt-5">
                            <FormCheck type="switch" id="custom-switch-asidethree" />
                            </div>
                        </div>
                        <div className="row pt-3 pl-3">
                            <p>Music System</p>
                        </div>
                      </div>
                      <div className="col-md-5 pl-5 asideBoxFour">
                      <div className="row ">
                            <div className="col-md-5 pt-5">
                                < GiBedLamp size={ 42}/>
                            </div>
                            <div className="col-md-2 pt-5">
                                <p>ON</p>
                            </div>
                            <div className="col-md-3 pt-5">
                            <FormCheck type="switch" id="custom-switch-asidefour" />
                            </div>
                        </div>
                        <div className="row pt-3 pl-3">
                            <p>Lamps</p>
                        </div>
                      </div>    
                  </div>
                  </div>  
            </div>
        )
    }
}
export default AsideMydevice