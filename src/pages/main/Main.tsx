import s from './Main.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import { useEffect } from 'react';
import { getCharacters } from '../../bll/reducers/mainSlice';
import { Loader } from '../../shared/components/atoms/loader/Loader';
import { useNavigate } from 'react-router-dom';

export const Main = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.main.loading);
  const characters = useAppSelector(state => state.main.data.data.results);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  const getSelectCharacter = (id: number) => {
    navigate(`/characters/${id}`);
  }

  if (isLoading) {
    return <Loader />;
  }

  return <div className={s.main}>
    {characters && characters.length > 0 ? (
      characters.map(({ thumbnail, name, id }, index) => (
        <div key={index} style={{width: '200px'}} onClick={() => getSelectCharacter(id)}>
          {name}
          <img style={{width: 100}} src={thumbnail.path + '.' + thumbnail.extension} alt="df" />
        </div>
      ))
    ) : (
      <div>No characters found</div>
    )}
  </div>
};
