import React from 'react'
import SlideMenu from './SlideMenu/SlideMenu'
import Body from './Body/Body'

const Container = () => {
  return (
    <div className='flex h-[p0vh] items-center justify-center w-[85vw] my-10 rounded-xl 
    overflow-hidden bg-[Blue]'>
        <SlideMenu/>
        <Body/>
        
    </div>
  )
}

export default Container