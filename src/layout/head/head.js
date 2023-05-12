import React from 'react';
import logo from "../../images/logo.png"
import i0 from "../../images/Icon.png"
import i1 from "../../images/Icon1.png"
import i2 from "../../images/Icon2.png"
import i3 from "../../images/Icon3.png"
import i4 from "../../images/Icon4.png"
import i5 from "../../images/Icon5.png"
import i6 from "../../images/Icon6.png"
import i7 from "../../images/Icon7.png"
import Ellipse from "../../images/Ellipse.png"


export default function Head() {
    return <div className="box-border h-28 border-b-4 flex items-center justify-between">
        <div className="">
            <img src={logo} alt="logo" />
        </div>
        <div className="flex-1 flex justify-aroud text-color">
            <ul className='flex items-center justify-around h-13'>
                <li className='flex items-center p-10'>
                    <img src={i0} className='mr-2' alt="" />
                    <span className='mr-2'>Explore</span>
                    <img src={i6} alt="" />
                </li>
                <li  className='flex items-center p-10'>
                    <img src={i1} className='mr-2' alt="" />
                    <span>GO LIVE!</span>
                </li>
                <li  className='flex items-center p-10'>
                    <img src={i2} className='mr-2' alt="" />
                    <span>DIscover</span>
                </li>
                <li  className='flex items-center p-10'>
                    <img src={i3} className='mr-2' alt="" />
                    <span>Blog</span>
                </li>
                <li  className='flex items-center p-10'>
                    <img src={i4} className='mr-2' alt="" />
                    <span>PRicing</span>
                </li>
            </ul>
            <div className="h13 flex items-center justify-around flex-1 ml-20">
                <img src={i5} alt="" />
                <img src={Ellipse} alt="" />
                <p>Name Surname</p>
                <img src={i6} alt="" />
                <img src={i7} alt="" />
            </div>
        </div>
    </div>
}
