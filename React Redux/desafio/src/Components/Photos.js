import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadingNewPhotos } from '../store/photos';
import PhotosContent from './PhotosContent';

const Photos = () => {
  const { data } = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  return <section>{data && <PhotosContent />}</section>;
};

export default Photos;
