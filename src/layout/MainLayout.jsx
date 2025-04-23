import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <div className='flex-1 h-full'>
          <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout