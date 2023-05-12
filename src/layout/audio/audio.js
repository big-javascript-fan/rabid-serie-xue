import React,{useContext,useState,useEffect,useRef} from 'react';
import i8 from "../../images/Icon8.png"
import i9 from "../../images/Icon9.png"
import i10 from "../../images/Icon10.png"
import i11 from "../../images/Icon11.png"
import {InfoContext} from "../../App.js"

export default function Audio() {
    const {data,kind} =useContext(InfoContext)
    const [tags,settags]=useState([])


    const hhh = useRef()
    // console.log(hhh.current)


    const bb =(e,name) =>{
        // console.log(name)
        
        if(e.target.tagName == "BUTTON"){
            e.target.className = "tagsbtn text-white px-8 py-3.5 rounded-xl flex items-center bg-gradient-to-bl from-navfrom to-navto"
            e.target.children[1].className = "icons ml-4"
            tags.push(name)
            console.log(tags,'pushtags')

        } else if(e.target.tagName == "IMG"){
            e.target.parentNode.className = "tagsbtn text-white px-8 py-3.5 rounded-xl flex items-center"
            e.target.className = "icons ml-4 hidden"
            
            let res=tags.filter((item,i)=>item!=name)
            settags(res)
            console.log(tags,'tags')
        }
    }

    
    return <div className="audio mb-10">
        <hgroup className='text-white text-4xl h-36 flex items-center font-blod'>FEATURED AUDIO PODCASTS</hgroup>
        <div className='h-13'>
            <div className='flex'>
                {tags.length==0 ?
                <button className="tagsbtn text-white px-8 py-3.5 bg-gradient-to-bl from-navfrom to-navto rounded-xl flex items-center">
                    <span>ALL</span>
                    <img src={i8} className='icons ml-4' alt="" />
                </button>
                :
                <button className="tagsbtn text-white px-8 py-3.5 rounded-xl flex items-center">
                    <span>ALL</span>
                    <img src={i8} className='icons ml-4 hidden' alt="" />
                </button>
                }
                
                
                {kind.map((item,i)=>
                    <button ref={hhh} className="tagsbtn text-white px-8 py-3.5 rounded-xl flex items-center" id='btn' key={i}  onClick={(e)=>bb(e,item.name)}>
                        <span>{item.name}</span>
                        <img src={i8} className='icons ml-4 hidden' alt="" />
                    </button>
                )}
                
            </div>
             <div></div>
        </div>
        <div className='mt-6 text-white flex flex-wrap'>
            {data.map((item,i) => (
                tags.map((m,a)=>(item.tags[0].tag.name!=m ?
                    <div className='box-border 1920:w-1/5 1440:w-1/4 mr-20 mb-8 shadow-card rounded-3xl overflow-hidden' key={i}>
                        <img src={item.thumbnail} alt="" className='w-full h-96'/>
                        <div className='p-4'>
                            <div className='text-white text-xl font-semibold'>{item.title}</div>
                            <div className='flex justify-between text-timecolor'>
                                <section>section1</section>
                                <section>April17,2002</section>
                            </div>
                            <div className='flex mt-4'>
                                <button className='leading-8 rounded-2xl mr-4 bg-travel px-4'>{item.tags[0].tag.name}</button>
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
                    </div>
                    :<></>
                    ))
                
            ))}
            

        </div>
    </div>
}
