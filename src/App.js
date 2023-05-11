import React ,{useEffect,useState,createContext}from 'react'
import Head from './layout/head/head.js'
import Audio from './layout/audio/audio.js'
import Newest from './layout/newest/newest.js'
import Email from './layout/email/email.js'
import Foot from './layout/foot/foot.js'
import { gql } from '@apollo/client';


const initialValue = {
  data: [],
}
export const InfoContext = createContext(initialValue)


function App(client) {
  const [data,setdata]=useState([])
useEffect(()=>{
client
.client
  .query({
    query: gql`
    query {
      findSeriesByPagination(
        kind: "VIDEO"
        skip: 0
        tagIds: []
        take: 10
      ) {
        totalCount
        series {
          id
          title
          likeCount
          followCount
          thumbnail
          description
        }
      }
    }
    `,
  })
  .then((result) => {
    setdata(result.data.findSeriesByPagination.series)
    console.log(result.data.findSeriesByPagination.series)
  });

  },[])

  return (
    <>
      <InfoContext.Provider value={{data}}>
        <div>
            <div className='w-screen bg-mainblack h-auto'>
          <div className='w-11/12 m-0 m-auto'>
            <Head></Head>
            <Audio></Audio>
            <Newest></Newest>
          </div>
            </div>
            <div className='w-screen bg-email h-auto py-24 box-border'>
          <div className='w-11/12 m-0 m-auto my-10 border-2 rounded-3xl border-email bg-email h-96 py-24 flex items-center justify-center box-border'>
            <Email></Email>
          </div>
            </div>
            <div className='w-screen bg-mainblack h-auto'>
              <div className='w-11/12 m-0 m-auto'>
                <Foot></Foot>
              </div>
            </div>
        </div>
      </InfoContext.Provider>
    </>
  )
}

export default App
