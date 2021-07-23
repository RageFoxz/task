import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../api/apiFetch';
import { getCards, sortCardsLike } from '../../redux/reducer/cards';
import { CardsList } from './CardsList/CardsList';
import { useDebounce } from '../hooks/useDebounce';

export const Cards = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cards.cardsData);

  const getUser = async () => {
    const response = await fetchUsers();
    dispatch(getCards(response.hits));
  };

  React.useEffect(() => {
    getUser();
  }, []);

  // useEffect(() => {
  //     dispatch(fetchUsers());
  // }, [])

  const getSortData = (type) => {
    if (type === 'likes') {
      dispatch(getCards(data.slice().sort((a, b) => a.likes - b.likes)));
    }
    if (type === 'comments') {
      dispatch(getCards(data.slice().sort((a, b) => a.comments - b.comments)));
    }
  };

  useEffect(() => {
    if (debouncedValue.length > 0)
      dispatch(
        getCards(data.filter((item) => item.tags.includes(debouncedValue)).map((item) => item)),
      );

    if (debouncedValue.length === 0) getUser();
  }, [debouncedValue]);

  const handlerEnterInput = (e) => setValue(e.target.value);

  return (
    <>
      <button onClick={() => getSortData('likes')} type="button">
        Likes
      </button>
      <button onClick={() => getSortData('comments')} type="button">
        Comments
      </button>
      <input type="text" name="" id="" placeholder="Enter text" onKeyUp={handlerEnterInput} />
      <CardsList data={data} />
    </>
  );
};
