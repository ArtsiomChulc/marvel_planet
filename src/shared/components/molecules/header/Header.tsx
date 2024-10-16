import { MenuItemsDesktop } from '../../atoms/menuItem/MenuItemsDesktop';
import s from './Header.module.scss';
import { HeaderIcon } from '../../atoms/headerIcon/HeaderIcon';
import { Burger } from '../../atoms/burger/burgerOpen/Burger';
import { useState } from 'react';
import { MenuItemsMobile } from '../../atoms/menuItem/MenuItemsMobile';
import { Blur } from '../../atoms/blur/Blur';

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
  }

  return (
    <div className={s.header_container}>
      <HeaderIcon />
      <MenuItemsDesktop />

      <Burger onClick={openMenu}/>

      <MenuItemsMobile setOpen={setOpen} isOpen={isOpen}/>

      {isOpen && <Blur/>}
    </div>
  );
};
