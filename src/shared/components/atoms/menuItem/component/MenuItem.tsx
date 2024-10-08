import {NavLink} from "react-router-dom";
import s from './MenuItem.module.scss';

type Props = {
    path: string
    title: string
}

export const MenuItem = ({path, title}: Props) => {
    return (
        <li className={s.menu_item}>
            <NavLink
                className={({isActive}) => isActive ? s.active : ''} to={path}>
                {title}
            </NavLink>
        </li>
    );
};