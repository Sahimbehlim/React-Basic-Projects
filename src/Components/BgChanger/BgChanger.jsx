import React, { useState } from 'react'

function BgChanger() {
    const [color, setColor] = useState('rgb(219 234 254)');
    document.body.style.backgroundColor = color;
  return (
        <div className='bg-white text-white rounded-lg shadow-lg px-4 py-3 flex gap-4'>
        {["Red","Green","Blue","Olive","Gray","Purple","Black","Yellow","White","Pink"].map((color,index) => {
            return <button
                    onClick={ () => setColor(color) }
                    style={{ backgroundColor : color }}
                    key={index}
                    className={`px-4 py-2 rounded-full ${index > 6 && 'text-black'}`} >
                        {color}
                    </button>
            })}
        </div>
  )
}

export default BgChanger