import React, { Component } from 'react'
import {FormCheck} from 'react-bootstrap'
import {RiFridgeLine} from 'react-icons/ri'
import {AiOutlineThunderbolt} from 'react-icons/ai'
import {SiApacheairflow} from 'react-icons/si'
import {FaRegLightbulb} from 'react-icons/fa'
import '../buttons/index.css'

 class Button extends Component {
    render() {
        return (
            <div>
                <div className="row mx-4 mt-5 box">
                    <div className="col-md-2 pt-3 boxrow">
                        <div className="row">
                            <div className="col-md-6">
                            <p> ON</p>
                            </div>
                            <div className="col-md-3">
                            <FormCheck type="switch" id="custom-switch-one" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                            < RiFridgeLine size={30}/>
                            </div>
                            
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-2">
                                <p>Refridgerator</p>
                            </div>
                        </div>
                                        </div>
                                        <div className="col-md-2 pt-3 boxrow">
                        <div className="row">
                            <div className="col-md-6">
                            <p> ON</p>
                            </div>
                            <div className="col-md-3">
                            <FormCheck type="switch" id="custom-switch-two" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                            < AiOutlineThunderbolt size={30}/>
                            </div>
                            
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-2">
                                <p>Temperature</p>
                            </div>
                        </div>
                                        </div>
                                        <div className="col-md-2 pt-3 boxrow">
                        <div className="row">
                            <div className="col-md-6">
                            <p> OFF</p>
                            </div>
                            <div className="col-md-3">
                            <FormCheck type="switch" id="custom-switchtree" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                            < SiApacheairflow size={30}/>
                            </div>
                            
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-2">
                                <p>Air Conditioner</p>
                            </div>
                        </div>
                                        </div>
                                        <div className="col-md-2 pt-3 boxrow">
                        <div className="row">
                            <div className="col-md-6">
                            <p> OFF</p>
                            </div>
                            <div className="col-md-3">
                            <FormCheck type="switch" id="custom-switchfour" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                            < FaRegLightbulb size={30}/>
                            </div>
                            
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-2">
                                <p>Light's</p>
                            </div>
                        </div>
                                        </div>
                  
                </div>
            </div>
        )
    }
}
export default Button