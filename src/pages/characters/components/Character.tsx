import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  clearSelectedCharacter,
  getCharacterById,
} from '../../../bll/reducers/charactersSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks/hooks';
import {
  CardCharacter,
} from '../../../shared/components/molecules/cardCharacter/CardCharacter';
import {
  CardSkeleton,
} from '../../../shared/components/atoms/skeletons/cardCharacterSkeleton/CardSkeleton';

export const Character = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const isLoading = useAppSelector(state => state.characters.loading);
  const selectCharacter = useAppSelector(state => state.characters.selectCharacter);
  const character = selectCharacter && selectCharacter.length > 0 ? selectCharacter[0] : null;

  useEffect(() => {
    if (id) {
      dispatch(getCharacterById(Number(id)));
    }
    return () => {
      dispatch(clearSelectedCharacter());
    };
  }, [dispatch, id]);

  if (isLoading) {
    return <CardSkeleton />;
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
