import s from './CardSkeleton.module.scss';

export const CardSkeleton = () => {
  return (
    <div className={s.card_skeleton}>
      <div className={s.img_skeleton}></div>
      <div className={s.text_skeleton}></div>
    </div>
  );
};