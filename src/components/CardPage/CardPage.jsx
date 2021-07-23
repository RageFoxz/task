import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCurrentPage } from '../../api/apiFetch';
import { useDispatch, useSelector } from 'react-redux';
import { getCardPage } from '../../redux/reducer/cards';

export const CardPage = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cards.cardPage);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = props?.match?.params;

  useEffect(() => {
    const getCurrentPage = async () => {
      setIsLoading(true);
      const response = await fetchCurrentPage(id);
      if (response) {
        dispatch(getCardPage(response.hits[0]));
        setIsLoading(false);
      }
    };
    getCurrentPage();
  }, [id]);

  if (isLoading) return <h1>Loading.....</h1>;

  return (
    <div>
      <h1>Hello World {data.id}</h1>
      <div>collections {data.collections}</div>
      <div>comments {data.comments}</div>
      <div>downloads {data.downloads}</div>
      <div>id {data.id}</div>
      <div>imageHeight {data.imageHeight}</div>
      <div>imageSize {data.imageSize}</div>
      <div>imageWidth {data.imageWidth}</div>
      <div>largeImageURL {data.largeImageURL}</div>
      <div>likes {data.downloads}</div>
      <div>pageURL {data.pageURL}</div>
      <div>previewHeight {data.previewHeight}</div>
      <div>previewURL {data.previewURL}</div>
      <div>previewWidth {data.previewWidth}</div>
      <div>tags {data.tags}</div>
      <div>type {data.type}</div>
      <div>user {data.user}</div>
      <div>userImageURL {data.userImageURL}</div>
      <div>user_id {data.user_id}</div>
      <div>views {data.views}</div>
      <div>webformatHeight {data.webformatHeight}</div>
      <div>webformatURL {data.webformatURL}</div>
      <div>webformatWidth {data.webformatWidth}</div>
      <Link to="/">To home</Link>
    </div>
  );
};
