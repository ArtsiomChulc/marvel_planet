import { getSourceImg } from '../../../helpers/getSrc';
import { Thumbnail } from '../../../../api/types/storiesType';
import { useNavigate } from 'react-router-dom';
import s from './CardCharacter.module.scss';

type Props = {
  description?: string
  name: string
  src: Thumbnail
  id?: number
}

export const CardCharacter = ({src, name, description, id}: Props) => {
  const navigate = useNavigate();

  const getSelectCharacter = (id: number | undefined) => {
    if (id) {
      navigate(`/character/${id}`);
    }
  }

  return (
    <div className={s.cardContainer} onClick={() => getSelectCharacter(id)}>
      <div className={s.imgBox}>
        <img src={getSourceImg(src)} alt={name} />
      </div>
      <div className={s.tex_wrapper}>
        <h3
          className={s.name_card}>{name}</h3>
        <p className={s.card_description}>{description}</p>
      </div>
    </div>
  );
};