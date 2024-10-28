import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import { useEffect } from 'react';
import { Loader } from '../../shared/components/atoms/loader/Loader';
import { getStories } from '../../bll/reducers/storiesSlice';
import { getSourceImg } from '../../shared/helpers/getSrc';

export const Stories = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.stories.loading);
  const stories = useAppSelector(state => state.stories.data.data.results);

  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);


  if (isLoading) {
    return <Loader />;
  }

  return <div>
    {stories && stories.length > 0 ? (
      stories.map(({ thumbnail, title, description }, index) => (
        <div key={index} style={{ width: '200px' }}>
          <div>{title}</div>
          <div>{description}</div>
          <img style={{ width: 100 }} src={getSourceImg(thumbnail)} alt="Marvel" />

        </div>
      ))
    ) : (
      <div>No stories found</div>
    )}
  </div>;
};
