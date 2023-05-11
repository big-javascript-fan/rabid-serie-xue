import React from 'react';
import foot1 from "../../images/foot1.png"
import foot2 from "../../images/foot2.png"
import foot3 from "../../images/foot3.png"
import foot4 from "../../images/foot4.png"
import foot5 from "../../images/foot5.png"

export default function Foot() {
    return <div>
        <div className="text-white h-96 py-10 box-border flex justify-between">
            <div className='w-96'>
                <img src={foot1} alt="logo" />
                <p className='whitespace-pre-wrap mt-6'>Rabid Reality is committed to supporting the mission of Villalobos Rescue Cneter. Your subscription dollars allow us to educate, inform and share the story of Villalobos everywhere!</p>
            </div>
            <div className='flex w-96 justify-between'>
                <dl>
                    <dt className='leading-10 text-xl font-semibold'>Quick Links</dt>
                    <dd className='leading-10 font-medium'>Home</dd>
                    <dd className='leading-10 font-medium'>Series</dd>
                    <dd className='leading-10 font-medium'>Podcasts</dd>
                    <dd className='leading-10 font-medium'>Pricing</dd>
                    <dd className='leading-10 font-medium'>Support</dd>
                </dl>
                <dl>
                    <dt className='leading-10 text-xl font-semibold'>Legals</dt>
                    <dd className='leading-10 font-medium'>Privacy</dd>
                    <dd className='leading-10 font-medium'>Terms</dd>
                    <dd className='leading-10 font-medium'>Company</dd>
                    <dd className='leading-10 font-medium'>Buy Merch!</dd>
                    <dd className='leading-10 font-medium'>Contact Villalobos</dd>
                </dl>
            </div>
            <div className='flex w-80 h-10 justify-between'>
                <img src={foot2} alt="logo" />
                <img src={foot3} alt="logo" />
                <img src={foot4} alt="logo" />
                <img src={foot5} alt="logo" />
            </div>
        </div>
        <div className="border-t-2 text-white flex justify-end">Copyright © 2023</div>
    </div>
    
}
