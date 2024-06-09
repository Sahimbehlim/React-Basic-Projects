import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function MyCards({name,date,img,shortdes,method}) {
    const [showCard, setShowCard] = useState(true);
    const [dropdown, setDropdown] = useState(false);
    const [likeColor, setLikeColor] = useState(false);
    const [showMethod, setShowMethod] = useState(false);
  return (
    <>
        {showCard &&  
        <div className={`bg-white w-80 shadow-xl rounded-md card ${showMethod ? 'animate' : ''}`}>
              <div className='flex p-3 items-start relative'>
                <AccountCircleIcon fontSize='large'/>
                <div className='me-6 ms-2 text-[14px]'>
                    <p>{name}</p>
                    <p className='text-gray-600'>{date}</p>
                </div>
                <MoreVertIcon onClick = {() => setDropdown(!dropdown)} 
                className='text-gray-600 ms-auto cursor-pointer'/>
                {dropdown && 
                <div className='absolute right-0 top-[35px] z-[1] p-2 rounded-md bg-white shadow-lg'>
                    <button onClick={() => setShowCard(!showCard)} className=' text-red-500'>Delete</button>
                </div>}
              </div>
              <div className='w-full h-56 overflow-hidden'>
                <img src={img} alt="" className='h-full w-full object-cover object-center duration-300 hover:scale-110 cursor-pointer' />
              </div>
              <p className='text-[14px] p-3 text-gray-600'>{shortdes}</p>
              <div className='flex p-3 text-gray-600'>
                <FavoriteIcon onClick = {() => setLikeColor(!likeColor)}
                className={`cursor-pointer ${likeColor ? 'text-red-600' : ''}`}/>
                <ShareIcon className='ms-3'/>
                {showMethod ? 
                  <KeyboardArrowUpIcon onClick = {() => setShowMethod(!showMethod)}
                  className='ms-auto cursor-pointer text-blue-800'/> : 
                  <KeyboardArrowDownIcon onClick = {() => setShowMethod(!showMethod)} 
                   className='ms-auto cursor-pointer'/>
                }    
              </div>
              {showMethod && 
              <div className='p-3 text-[13.5px] text-justify bg-gray-100 rounded-b-md'>
                {method}
              </div>}
        </div>}
    </>
  )
}

export default MyCards