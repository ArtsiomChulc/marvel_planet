import s from './CrossBurger.module.scss';

type Props = {
  closeMenu: () => void
}

export const CrossBurger = ({closeMenu}: Props) => {
  return (
    <div className={s.close_btn_wrap} onClick={closeMenu}>
      <span></span>
      <span></span>
    </div>
  );
};