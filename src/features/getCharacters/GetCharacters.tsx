import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import { useEffect, useState } from 'react';
import { getCharacters } from '../../bll/reducers/charactersSlice';
import { Characters } from '../../pages/characters/Characters';
import {
  CardSkeleton,
} from '../../shared/components/atoms/skeletons/cardCharacterSkeleton/CardSkeleton';

export const GetCharacters = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  const dispatch = useAppDispatch();
  const { data, loading: isLoading } = useAppSelector(state => state.characters);
  const { results, total } = data.data;
  const { attributionText } = data;

  const skeletonCount = 6;

  const getSkeletons = () => {
    return Array.from({ length: skeletonCount }, (_, i) =>
      <CardSkeleton key={i} />,
    );
  };
  useEffect(() => {
    const offset = (currentPage - 1) * limit;
    dispatch(getCharacters({ offset, limit }));
  }, [dispatch, currentPage]);

  const totalPages = Math.ceil(total / limit);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };


  if (!results) {
    return <div>No characters found</div>;
  }

  return (
    <>
      {isLoading ? (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap', alignItems: 'center',
          justifyContent: 'space-between',
          gap: 15,
        }}>
          {getSkeletons()}
        </div>
      ) : (
        <Characters attributionText={attributionText} characters={results} currentPage={currentPage} pageCount={totalPages} onChangePage={handlePageChange} />
      )}
    </>
  );
};