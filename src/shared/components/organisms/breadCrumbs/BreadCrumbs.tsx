import s from './BreadCrumbs.module.scss';
import { NavLink, useLocation } from 'react-router-dom';

export const BreadCrumbs = () => {
  const location = useLocation();
  const pathName = location.pathname;
  let currentPath = '';

  const crumbs = pathName.split('/')
    .filter(crumb => crumb !== '')
    .map((crumb, index, array) => {
      currentPath += `/${crumb}`;
      const isLastCrumb = index === array.length - 1;

      const crumbName = crumb.charAt(0).toUpperCase() + crumb.slice(1).replace(/-/g, ' ');

      return (
        <div className={s.crumb} key={crumb}>
          <NavLink to={currentPath} className={isLastCrumb ? s.last_crumb : ''}>
            {crumbName}
          </NavLink>
        </div>
      );
    });

  return (
    <div className={s.crumbs}>
      {pathName !== '/' && <div className={s.crumb}>
        <NavLink to="/">Главная</NavLink>
      </div>}

      {crumbs}
    </div>
  );
};