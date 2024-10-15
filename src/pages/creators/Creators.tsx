import { useAppSelector } from '../../app/hooks/hooks';
import { getSourceImg } from '../../shared/helpers/getSrc';
import { GetCreators } from '../../features/getCreators/GetCreators';
import s from './Creators.module.scss';

export const Creators = () => {
  const creators = useAppSelector(state => state.creators.data.data.results);

  const creatorsItem = creators.map(({thumbnail, firstName, fullName, suffix, lastName, middleName, id}) => {
    return (
      <div key={id} className={s.creators_card}>
        <div className={s.img_wrapper}>
          <img src={getSourceImg(thumbnail)} alt={firstName} />
        </div>
        <div className={s.text_container}>
        <span>firstName: {firstName}</span>
          <span>fullName: {fullName}</span>
          <span>lastName: {lastName}</span>
          <span>middleName: {middleName}</span>
          <span>suffix: {suffix}</span>
        </div>
      </div>
    )
  })

  return (
    <GetCreators>
      <div className={s.creators_container}>
        {creatorsItem}
      </div>
    </GetCreators>
  );
};