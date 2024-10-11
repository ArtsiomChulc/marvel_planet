import { MenuItems } from '../../atoms/menuItem/MenuItems';
import s from './Header.module.scss';
import { HeaderIcon } from '../../atoms/headerIcon/HeaderIcon';

export const Header = () => {
  return (
    <div className={s.header_container}>
      <HeaderIcon/>
      <MenuItems />
    </div>
  );
};
