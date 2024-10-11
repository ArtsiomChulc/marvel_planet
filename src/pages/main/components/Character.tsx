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

  return (
    <div>
      <h1>{character[0].name}</h1>
      <img src={getSourceImg(character[0].thumbnail)} alt={character[0].name} />
      <p>{character[0].description}</p>
    </div>
  );
};