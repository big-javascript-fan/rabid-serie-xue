import React,{useContext} from 'react';
import i9 from "../../images/Icon9.png"
import i10 from "../../images/Icon10.png"
import i11 from "../../images/Icon11.png"
import tag from "../../images/tag.png"
import {InfoContext} from "../../App.js"

export default function Newest() {
    
    const {data} =useContext(InfoContext)

    return <div>
        <hgroup className='text-white text-4xl h-36 flex items-center font-blod border-b-2 border-new'>NEWEST SERIES</hgroup>
        <div className='py-6 text-white flex flex-wrap'>
        {data.map((item,i) => (
            <div className='box-border 1920:w-1/5 1440:w-1/4 mr-20 mb-8 shadow-card rounded-3xl overflow-hidden' key={i}>
                <div className='relative'>
                    <img src={item.thumbnail} alt="" className='w-full h-96'/>
                    <img src={tag} alt="" className='absolute right-6 top-6'/>
                </div>
                <div className='p-4'>
                    <div className='text-white text-xl font-semibold'>{item.title}</div>
                    <div className='flex justify-between text-timecolor'>
                        <section>section1</section>
                        <section>April17,2002</section>
                    </div>
                    <div className='flex mt-4'>
                            <button className='leading-8 rounded-2xl mr-4 bg-travel px-4'>travel</button>
                            <button className='leading-8 rounded-2xl mr-4 bg-true px-4'>True Crime</button>
                    </div>
                    <p className='py-4 border-b-2'>{item.description}</p>
                    <div className='flex'>
                        <div className='flex justify-between w-full items-center'>
                            <div className='flex pt-6 pb-3'>
                                <div className='flex px-3'>
                                    <img src={i9} alt="" className='mr-2'/>
                                    <span>{item.likeCount}</span>
                                </div>
                                <div className='flex px-3'>
                                    <img src={i10} alt="" className='mr-2'/>
                                    <span>{item.followCount}</span>
                                </div>
                            </div>
                            <div className='w-11 h-11 rounded-full bg-share flex justify-center items-center'>
                                <img src={i11} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-4/5 m-0 m-auto mb-4 bg-gradient-to-bl from-btnfrom to-btnto flex items-center justify-center py-4 rounded-xl'>TOTAL EPISODES: 10</div>
            </div>
        ))}
            

        </div>
    </div>
}
