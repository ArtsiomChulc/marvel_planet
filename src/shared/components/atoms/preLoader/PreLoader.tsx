import s from './PreLoader.module.scss';

export const PreLoader = () => {
  return (
    <div className={s.loader}>
      <div className={s.loadingBar}></div>
    </div>
  );
};
