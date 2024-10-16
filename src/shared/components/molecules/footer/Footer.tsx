import logo from '../../../../assets/icons/Marvel_logo.png';

import s from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={s.footer_container}>
      <div className={s.logo_wrap}>
        <img src={logo} alt="Logo Marvel" />
      </div>
      <div className={s.footer_content}>
        <p className={s.title}>
          This application is made using:
        </p>
        <div className={s.description}>
          <span>
          React js
        </span>
          <span>
          Axios
        </span>
          <span>
          SCSS
        </span>
          <span>
          Typescript
        </span>
          <span>
          React router dom
        </span>
        </div>
      </div>
    </div>
  );
};