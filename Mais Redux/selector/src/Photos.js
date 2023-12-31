import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPhotos } from './store/photos';
import { useSelector } from 'react-redux';
import { getOverFiveKg } from './store/photos';


const Photos = () => {
  const data = useSelector(getOverFiveKg);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  if (!data) return null;
  return (
    <div>
      {data.map((photo) => (
        <li key={photo.id}>
          {photo.title} | {photo.peso} pounds
        </li>
      ))}
    </div>
  );
};

export default Photos;
