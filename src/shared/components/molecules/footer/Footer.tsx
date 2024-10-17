import logo from '../../../../assets/icons/Marvel_logo.png';

import s from './Footer.module.scss';
import { madeUsing } from './schemas';

export const Footer = () => {

  const usingItem = madeUsing.map(({title, id}) => {
    return <span key={id}>{title}</span>
  })

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
          {usingItem}
        </div>
      </div>

      <div className={s.footer_content}>
        <p className={s.title}>
          Used Marvel API:
        </p>
        <div className={s.description}>
          <span>Artsiom Chults</span>
          <span>artemorsha1982@gmail.com</span>
          <span>www.linkedin.com/in/artem-chults-5047832a2</span>
        </div>
      </div>
    </div>
  );
};