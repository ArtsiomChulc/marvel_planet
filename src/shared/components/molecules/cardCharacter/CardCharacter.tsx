import { getSourceImg } from '../../../helpers/getSrc';
import { Thumbnail } from '../../../../api/types/storiesType';
import { useNavigate } from 'react-router-dom';
import s from './CardCharacter.module.scss';

type Props = {
  description?: string
  name: string
  src: Thumbnail
  id?: number
  attributionText?: string
}

export const CardCharacter = ({src, name, description, attributionText, id}: Props) => {
  const navigate = useNavigate();

  const getSelectCharacter = (id: number | undefined) => {
    if (id) {
      navigate(`/characters/${id}`);
    }
  }

  return (
    <div className={s.cardContainer} onClick={() => getSelectCharacter(id)}>
      <div className={s.imgBox}>
        <img src={getSourceImg(src)} alt={name} />
      </div>
      <div className={s.text_wrapper}>
        <h3
          className={s.name_card}>{name}</h3>
        <p className={s.card_description}>{description}</p>
      </div>
      <span className={s.card_attribution}>{attributionText}</span>
    </div>
  );
};