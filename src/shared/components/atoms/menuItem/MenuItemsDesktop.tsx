import { MenuItem } from './component/MenuItem';
import s from './MenuItems.module.scss';

export const MenuItemsDesktop = () => {
  return <ul className={s.menu_item_desktop}><MenuItem/></ul>;
};
