import React from 'react'
import Head from './layout/head/head.js'
import Audio from './layout/audio/audio.js'
import Newest from './layout/newest/newest.js'


function App() {

  return (
    <>
        <div className='w-screen bg-mainblack h-auto'>
          <div className='w-11/12 m-0 m-auto'>
            <Head></Head>
            <Audio></Audio>
            <Newest></Newest>
          </div>
        </div>
    </>
  )
}

export default App
