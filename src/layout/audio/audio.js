import React,{useContext,useState,useEffect,useRef} from 'react';
import i8 from "../../images/Icon8.png"
import i9 from "../../images/Icon9.png"
import i10 from "../../images/Icon10.png"
import i11 from "../../images/Icon11.png"
import {InfoContext} from "../../App.js"

export default function Audio() {
    const {data,kind,request} =useContext(InfoContext)
    const [tags,settags]=useState([])
    const [newdata,setnewdata]=useState([])
    const [pagedata,setpagedata]=useState([])

    const navchoose =(e,name) =>{
        console.log(name)
        console.log(pagedata)
        const tagsbtn = document.querySelectorAll('.tagsbtn');

        if(name == -1){
            
            tagsbtn[0].className = "tagsbtn text-white px-8 py-3.5 bg-gradient-to-bl from-navfrom to-navto rounded-xl flex items-center"
            
            for (var i = 0; i < tagsbtn.length; i++) {
                if(i >0){
                    tagsbtn[i].className = "tagsbtn text-white px-8 py-3.5 rounded-xl flex items-center"
                    tagsbtn[i].children[1].className = "icons ml-4 hidden"
                }
                // console.log(tagsbtn[i])
            }
            // console.log(123)
            request('')
            return false
        }
       

        tagsbtn[0].className = "tagsbtn text-white px-8 py-3.5 rounded-xl flex items-center"
        

        if(e.currentTarget.children[1].className.indexOf('hidden') >1){
            //隐藏了 ❎ 需要显示
             e.currentTarget.className = "tagsbtn text-white px-8 py-3.5 rounded-xl flex items-center bg-gradient-to-bl from-navfrom to-navto"
             e.currentTarget.children[1].className = "icons ml-4"
             
             console.log(pagedata)
             pagedata.push(name)
            // console.log(tags,38)
        }else{
            // delete( newdata[name] )
            e.currentTarget.className = "tagsbtn text-white px-8 py-3.5 rounded-xl flex items-center"
            e.currentTarget.children[1].className = "icons ml-4 hidden"
            for (const key in pagedata) {
                if(pagedata[key] == name){
                    delete(pagedata[key])
                }
            }
        }
        const hidden = document.querySelectorAll('.hidden');
        if(hidden.length == tagsbtn.length -1 ){
            tagsbtn[0].className = "tagsbtn text-white px-8 py-3.5 bg-gradient-to-bl from-navfrom to-navto rounded-xl flex items-center"
        }
        console.log(pagedata,'this is new data')
        // console.log(newdata.join(','))
        request(pagedata.join(','))

    }

    useEffect(()=>{
        setnewdata(data)
    },[data])
    // useEffect(()=>{
    //     setnewdata([])
    //     if(tags.length==0){
    //         setnewdata(data)
    //     }
    //     else{
    //         for(var i=0;i<tags.length;i++){
    //             for(var j=0;j<data.length;j++){
    //                 if(tags[i]==data[j].tags[0].tag.name){
    //                     setnewdata([...newdata,data[j]]) 
    //                     // console.log(data[j].tags[0].tag.name)
    //                 }
    //             }
    //         }
    //     console.log(newdata)
    //     }
        
    // },[tags])
    
    return <div className="audio mb-10">
        <hgroup className='text-white text-4xl h-36 flex items-center font-blod'>FEATURED AUDIO PODCASTS</hgroup>
        <div className='h-13'>
            <div className='flex'>
                <button className="tagsbtn text-white px-8 py-3.5 bg-gradient-to-bl from-navfrom to-navto rounded-xl flex items-center"  onClick={(e)=>navchoose(e,-1)}>
                    <span>ALL</span>
                </button>
                
                
                {kind.map((item,i)=>
                    <button className="tagsbtn text-white px-8 py-3.5 rounded-xl flex items-center" id='btn' key={i}  onClick={(e)=>navchoose(e,item.id)}>
                        <span>{item.name}</span>
                        <img src={i8} className='icons ml-4 hidden' alt="" />
                    </button>
                )}
                
            </div>
             <div></div>
        </div>
        <div className='mt-6 text-white flex flex-wrap'>
            {newdata.map((item,i) => (
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
                
                
            ))}
            
        </div>
    </div>
}
