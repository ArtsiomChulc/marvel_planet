import { MenuItemsDesktop } from '../../atoms/menuItem/MenuItemsDesktop';
import s from './Header.module.scss';
import { HeaderIcon } from '../../atoms/headerIcon/HeaderIcon';
import { Burger } from '../../atoms/burger/Burger';
import { useState } from 'react';
import { MenuItemsMobile } from '../../atoms/menuItem/MenuItemsMobile';

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
  }

  const closeMenu = () => {
    setOpen(false);
  }


  return (
    <div className={s.header_container}>
      <HeaderIcon />
      <MenuItemsDesktop />

      <Burger onClick={openMenu}/>

      <MenuItemsMobile onClose={closeMenu} isOpen={isOpen}/>

      {isOpen && <div className={s.blur}></div>}
    </div>
  );
};
