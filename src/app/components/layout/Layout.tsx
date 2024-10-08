import {Outlet} from "react-router-dom";
import {Suspense} from "react";
import {Loader} from "../../../shared/components/atoms/loader/Loader.tsx";

import s from './Layout.module.scss'
import {Header} from "../../../shared/components/molecules/header/Header.tsx";

export const Layout = () => {
    return (
        <div className={s.main_container}>
            <Header/>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
            <div>Footer</div>
        </div>
    );
};