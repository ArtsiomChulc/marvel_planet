import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  clearSelectedCharacter,
  getCharacterById,
} from '../../../bll/reducers/mainSlice';
import { Loader } from '../../../shared/components/atoms/loader/Loader';
import { useAppDispatch, useAppSelector } from '../../../app/hooks/hooks';
import {
  CardCharacter,
} from '../../../shared/components/molecules/cardCharacter/CardCharacter';

export const Character = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const isLoading = useAppSelector(state => state.main.loading);
  const character = useAppSelector(state => state.main.selectCharacter[0]);

  useEffect(() => {
    if (id) {
      dispatch(getCharacterById(Number(id)));
    }
    return () => {
      dispatch(clearSelectedCharacter());
    };
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!character) {
    return <div>No character found</div>;
  }

  const cardName = character.name;
  const cardDescription = character.description;
  const cardSrc = character.thumbnail;

  return (
    <CardCharacter name={cardName} description={cardDescription} src={cardSrc} />
  );
};
