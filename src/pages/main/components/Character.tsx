import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  clearSelectedCharacter,
  getCharacterById,
} from '../../../bll/reducers/mainSlice';
import { Loader } from '../../../shared/components/atoms/loader/Loader';
import { useAppDispatch, useAppSelector } from '../../../app/hooks/hooks';
import { Thumbnail } from '../../../api/types/storiesType';

export const Character = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const isLoading = useAppSelector(state => state.main.loading);
  const character = useAppSelector(state => state.main.selectCharacter);

  console.log(character);

  useEffect(() => {
    if (id) {
      dispatch(getCharacterById(Number(id)));
    }
    return () => {
      dispatch(clearSelectedCharacter());
    };
  }, [dispatch, id]);

  const getSourceImg = (thumb: Thumbnail | null) => {
    if(thumb) {
      return `${thumb.path}.${thumb.extension}`
    }
    return undefined
  }

  if (isLoading) {
    return <Loader />;
  }

  if (!character) {
    return <div>No character found</div>;
  }

  if (!character || character.length === 0) {
    return <div>No character found</div>; // Проверка на пустой массив
  }

  const selectedCharacter = character[0];

  return (
    <div>
      <h1>{selectedCharacter.name}</h1>
      <img src={getSourceImg(selectedCharacter.thumbnail)} alt={selectedCharacter.name} />
      <p>{selectedCharacter.description}</p>
    </div>
  );
};