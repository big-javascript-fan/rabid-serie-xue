import React from 'react';
import arrow from "../../images/arrow.png"


export default function Email() {
    return <div className="text-white">
        <hgroup className='text-4xl font-bold flex justify-center items-center'>Be the first to receive all the information</hgroup>
        <section className='my-6 text-sm flex justify-center items-center'>We will sent you about Upcoming Events, Monthly Updates and New Release!</section>
        <main className='flex justify-center'>
            <div className='flex mr-14'>
                <input className="text-sm py-3 pl-6 pr-12  rounded-tl-2xl rounded-bl-2xl" type="text" placeholder="Write Your Email" value="" />
                <div className='bg-white rounded-tr-2xl rounded-br-2xl flex justify-center items-center px-4'>
                    <img src={arrow} alt="logo" />
                </div>
            </div>
            <div className='bg-gradient-to-bl from-btnfrom to-btnto flex items-center justify-center py-4 rounded-2xl px-10'>Subscribe</div>
        </main>
    </div>
}
