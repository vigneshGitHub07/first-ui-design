import React, { Component } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {CgAlignRight} from 'react-icons/cg'
import {GiBedLamp} from 'react-icons/gi'
import {GiGriffinShield} from 'react-icons/gi'
import {IoLocationOutline} from 'react-icons/io5'
import {BsPeople} from 'react-icons/bs'
import {AiFillSignal} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import '../sidenav/index.css'
class SideNav extends Component {
    render() {
        return (
            <div>
                <div className="row sidenav">
                    <div className="col-md-12">
                        <div className="row pt-4 ">
                            <div className="col-md-12 ">
                           <span className="">< AiOutlineHome size={44}/></span> 
                            </div>
                        </div>
                        <div className="row  icondesign">
                            <div className="col-md-12 ">
                            < CgAlignRight />
                            </div>
                        </div>
                        <div className="row  icondesign">
                            <div className="col-md-12 ">
                            < GiBedLamp />
                            </div>
                        </div>
                        <div className="row  icondesign">
                            <div className="col-md-12 ">
                            < GiGriffinShield />
                            </div>
                        </div>
                        <div className="row  icondesign">
                            <div className="col-md-12 ">
                            < IoLocationOutline />
                            </div>
                        </div>
                        <div className="row icondesign">
                            <div className="col-md-12">
                            < BsPeople />
                            </div>
                        </div>
                        <div className="row  icondesign">
                            <div className="col-md-12 ">
                            < AiFillSignal />
                            </div>
                        </div>
                        <div className="row logout">
                            <div className="col-md-12">
                            < FiLogOut />
                            </div>
                        </div>
                    </div>
                
                </div>

            </div>
        )
    }
}
export default SideNav