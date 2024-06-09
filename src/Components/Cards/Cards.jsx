import React, { useState } from 'react'
import { recipes } from './api';
import MyCards from './MyCards';

function Cards() {
    const [data, setData] = useState(recipes);
  return (
    <>  
        {data.map((item) => {
          return <MyCards key={item.id} {...item}/>
        })}
    </>
  )
}

export default Cards