import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import { useEffect } from 'react';
import { getCharacters } from '../../bll/reducers/mainSlice';
import { Loader } from '../../shared/components/atoms/loader/Loader';
import { Characters } from '../../pages/main/Characters';

export const GetCharacters = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.main.loading);
  const characters = useAppSelector(state => state.main.data.data.results);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);


  if (!characters) {
    return <div>No characters found</div>;
  }

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Characters characters={characters}/>
  );
};