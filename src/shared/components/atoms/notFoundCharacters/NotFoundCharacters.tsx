import notFound from '../../../../assets/icons/not-found.png';
import s from './NotFoundCharacters.module.scss';

export const NotFoundCharacters = () => {
  return (
    <div className={s.not_found}>
      <span>Sorry...</span>
      <span>Nothing found</span>
      <span>Try something different</span>
      <div className={s.not_found_icon}>
        <img src={notFound} alt="Not found png" />
      </div>
    </div>
  );
};