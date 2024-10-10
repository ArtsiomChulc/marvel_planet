import s from './Main.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import { useEffect } from 'react';
import {getMain} from "../../bll/reducers/mainSlice";
import {Loader} from "../../shared/components/atoms/loader/Loader";

export const Main = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.main.loading);
  const errorApp = useAppSelector(state => state.main.error);
  const characters = useAppSelector(state => state.main.data.results);
  console.log(isLoading);

  useEffect(() => {
    dispatch(getMain());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return <div className={s.main}>main</div>;
};
