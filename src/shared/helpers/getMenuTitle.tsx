import { MenuItemsText } from '../commonTypes';
import s from '../components/atoms/menuItem/component/MenuItem.module.scss';
import { NavLink } from 'react-router-dom';

export const getMenuTitle = (array: MenuItemsText[]) => {
  return array.map(({ title, id, path }) => {
    if (path) {
      return (
        <li>
        <NavLink
          key={id}
          className={({ isActive }) => (isActive ? s.active : '')}
          to={path}
        >
          {title}
        </NavLink>
      </li>
      );
    }
    return null;
  });
};