import s from './Header.module.scss';
import { MenuItems } from '../../atoms/menuItem/MenuItems';

export const Header = () => {
  return (
    <div className={s.header_container}>
      <MenuItems />
    </div>
  );
};
