import React from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className='flex gap-5 p-10'>

            <div className='flex gap-5 p-10'>
                <div className='sm:w-[10%] bg-red-500'><Sidebar /></div>
                <div className='flex-1 w-full pl-10'> <MessageContainer /></div>

            </div>
        </div>
    )
}

export default Homepage
