import s from './MenuItems.module.scss';
import { MenuItem } from './component/MenuItem';

type Props = {
  onClose: () => void;
  isOpen: boolean;
}

export const MenuItemsMobile = ({onClose, isOpen}: Props) => {
  return (
    <div className={`${s.mobile_menu_container} ${isOpen ? s.open_menu : ''}`}>
      <div className={s.close_btn_wrap}>
        <span onClick={onClose}>X</span>
      </div>
      <ul className={s.menu_item_mobile}>
        <MenuItem />
      </ul>
    </div>
  );
};