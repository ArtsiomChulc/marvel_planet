import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import { useEffect } from 'react';
import { getCharacters } from '../../bll/reducers/charactersSlice';
import { Characters } from '../../pages/characters/Characters';
import {
  CardSkeleton,
} from '../../shared/components/atoms/skeletons/cardCharacterSkeleton/CardSkeleton';

export const GetCharacters = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.characters.loading);
  const characters = useAppSelector(state => state.characters.data.data.results);

  const skeletonCount = 10;

  const getSkeletons = () => {
    return Array.from({ length: skeletonCount }, (_, i) =>
      <CardSkeleton key={i} />,
    );
  };
  useEffect(() => {
    dispatch(getCharacters('hulk'));
  }, [dispatch]);


  if (!characters) {
    return <div>No characters found</div>;
  }

  return (
    <>
      {isLoading ? (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap', alignItems: 'center',
          justifyContent: 'space-between',
          gap: 15
        }}>
          {getSkeletons()}
        </div>
      ) : (
        <Characters characters={characters} />
      )}
    </>
  );
};