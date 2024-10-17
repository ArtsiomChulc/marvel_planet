import s from './Burger.module.scss';

type Props = {
  onClick: () => void
}

export const Burger = ({onClick}: Props) => {
  return (
    <div className={s.burger} onClick={onClick}>
      <span></span>
      <span></span>
    </div>
  );
};