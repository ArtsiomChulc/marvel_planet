import iconHeader from '../../../../assets/icons/Marvel_logo.png';
import s from './HeaderIcon.module.scss';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../../../app/router/lib/path';

export const HeaderIcon = () => {
  return (
    <NavLink to={PATHS.main}>
      <div className={s.icon_header_container}>
        <img src={iconHeader} alt="Icon Marvel" />
      </div>
    </NavLink>
  );
};