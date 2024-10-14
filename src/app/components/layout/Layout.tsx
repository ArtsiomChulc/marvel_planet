import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../../../shared/components/atoms/loader/Loader';
import { Header } from '../../../shared/components/molecules/header/Header';
import s from './Layout.module.scss';
import {
  BreadCrumbs
} from '../../../shared/components/organisms/breadCrumbs/BreadCrumbs';

export const Layout = () => {
  return (
    <div className={s.main_container}>
      <div className={s.linear_bc}>
        <Header />
        <BreadCrumbs/>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <div>Footer</div>
      </div>
    </div>
  );
};
