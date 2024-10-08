import {menuItemsText} from "../../molecules/header/schemas";
import {MenuItem} from "./component/MenuItem.tsx";
import s from './MenuItems.module.scss';

export const MenuItems = () => {
    const menuTitles = menuItemsText.map(({title, id, path}) => {
        if (path) {
            return <MenuItem path={path} title={title} key={id} />
        }
    })
    return (
        <ul className={s.list_items}>
            {menuTitles}
        </ul>
    );
};