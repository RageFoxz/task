import React, { useEffect, useState } from 'react'
import { Cards } from './components/Cards/Cards';

export const App = () => {
  const [count, setCount] = useState(55);

  const handlerClickPlus = () => setCount((prev) => prev+1);

  return (
    <div>
      <h1>Hello</h1>
      <div>{count}</div>
      <button onClick={handlerClickPlus}>plus</button>
      {/* {data.map(({largeImageURL}) => <img src={largeImageURL}/> )} */}
      <Cards/>
    </div>
  )
}
