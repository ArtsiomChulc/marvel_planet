import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import { useEffect } from 'react';
import { Loader } from '../../shared/components/atoms/loader/Loader';
import { getStories } from '../../bll/reducers/storiesSlice';
import { Thumbnail } from '../../api/types/storiesType';

export const Stories = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.stories.loading);
  const stories = useAppSelector(state => state.stories.data.data.results);

  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);

  const getSourceImg = (thumb: Thumbnail | null) => {
    if(thumb) {
      return `${thumb.path}.${thumb.extension}`
    }
    return undefined
  }

  if (isLoading) {
    return <Loader />;
  }

  return <div>
    {stories && stories.length > 0 ? (
      stories.map(({ thumbnail, title }, index) => (
        <div key={index} style={{width: '200px'}}>
          {title}
          <img style={{width: 100}} src={getSourceImg(thumbnail)} alt="df" />

        </div>
      ))
    ) : (
      <div>No stories found</div>
    )}
  </div>
};
