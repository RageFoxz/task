import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cards } from './components/Cards/Cards';
import { addCount, minusCount } from './redux/reducer/counter';
import { Routes } from './routers/Routes';

export const App = () => {
  const [count, setCount] = useState(55);
  const handlerClickPlus = () => setCount((prev) => prev + 1);
  const dispatch = useDispatch();
  const getValue = useSelector((state) => state.counter.value);
  console.log(getValue);
  return (
    <div>
      <h1>Hello</h1>
      <div>{getValue}</div>
      <button onClick={() => dispatch(minusCount())}>minus</button>
      <button onClick={() => dispatch(addCount(40))}>plus</button>
      <Routes />
    </div>
  );
};
