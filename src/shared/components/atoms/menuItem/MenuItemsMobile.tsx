import s from './MenuItems.module.scss';
import { MenuItem } from './component/MenuItem';
import { useEffect, useRef } from 'react';
import useClickOutside from '../../../helpers/hooks/useClickOutside';
import { useLocation } from 'react-router-dom';

type Props = {
  isOpen: boolean;
  setOpen: (value: boolean) => void
}

export const MenuItemsMobile = ({isOpen, setOpen}: Props) => {

  const menuRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useClickOutside(menuRef, () => setOpen(false))

  useEffect(() => {
    if(location) {
      setOpen(false)
    }
  }, [location, setOpen])

  const closeMenu = () => {
    setOpen(false);
  }

  return (
    <div ref={menuRef} className={`${s.mobile_menu_container} ${isOpen ? s.open_menu : ''}`}>
      <div className={s.close_btn_wrap} onClick={closeMenu}>
        <span></span>
        <span></span>
      </div>
      <ul className={s.menu_item_mobile}>
        <MenuItem />
      </ul>
    </div>
  );
};