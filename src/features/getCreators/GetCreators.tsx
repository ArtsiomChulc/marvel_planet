import { FC, PropsWithChildren, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import { getCreators } from '../../bll/reducers/creatorsSlice';
import { Loader } from '../../shared/components/atoms/loader/Loader';

export const GetCreators: FC<PropsWithChildren> = ({children}) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.creators.loading)

  useEffect(() => {
    dispatch(getCreators())
  }, [dispatch]);

  if (isLoading) {
    return <Loader/>
  }

  return (
    <>
      {children}
    </>
  );
};