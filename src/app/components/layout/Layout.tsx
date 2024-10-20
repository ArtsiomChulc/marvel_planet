import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../../../shared/components/atoms/loader/Loader';
import { Header } from '../../../shared/components/molecules/header/Header';
import s from './Layout.module.scss';
import {
  BreadCrumbs
} from '../../../shared/components/organisms/breadCrumbs/BreadCrumbs';
import { Footer } from '../../../shared/components/molecules/footer/Footer';

export const Layout = () => {
  return (
    <div className={s.main_container}>
      <div className={s.linear_bc}>
        <Header />
        <BreadCrumbs/>
        <Suspense fallback={<Loader />}>
          <div className={s.pages_container}>
            <Outlet />
          </div>
        </Suspense>
        <Footer/>
      </div>
    </div>
  );
};
