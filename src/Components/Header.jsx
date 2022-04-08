import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
export default function Header() {
  return (
    <div className='flex pt-4 bg-indigo-200 h-24'>
        <div className=' flex self-start basis-1/4'>
            <h1 className='main-heading text-3xl text-indigo-600 ml-4'>Note-ed</h1>
        </div>
        <div className='text-gray-500 text-base font-semibold text-base basis-1/2 flex content-center justify-center'>
            <a href="/dashboard" className='flex flex-col content-center hover:text-blue-900'>
                <div className='flex justify-center w-32 '>
                 <DashboardIcon />
                </div>
                <p className=' flex justify-center content-center rounded w-32  h-8  decoration-4 hover:text-blue-900'>Dashboard</p>
            </a>
            
        </div>
        <div className='flex justify-center basis-1/4'>

            <div className='flex font-medium w-28 h-10 rounded justify-center content-center border-4 border-indigo-700 text-blue-700'>Logout</div>
        </div>

    </div>
  )
}
