import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import { useEffect } from 'react';
import { Loader } from '../../shared/components/atoms/loader/Loader';
import { getStories } from '../../bll/reducers/storiesSlice';
import { CardStories } from '../../shared/components/molecules/cardStories/CardStories';
import s from './Stories.module.scss';
import { useNavigate } from 'react-router-dom';

export const Stories = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.stories.loading);
  const stories = useAppSelector(state => state.stories.data.data.results);

  const navigate = useNavigate();

  const getSelectStory = (id: number | undefined) => {
    if (id) {
      navigate(`/story/${id}`);
    }
  }

  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);


  if (isLoading) {
    return <Loader />;
  }

  return <div className={s.container_cards}>
    {stories && stories.length > 0 ? (
      stories.map(({ thumbnail, title, description, id }) => (
        <CardStories key={id} name={title} src={thumbnail} description={description} getSelectCharacter={getSelectStory} />
      ))
    ) : (
      <div>No stories found</div>
    )}
  </div>;
};
