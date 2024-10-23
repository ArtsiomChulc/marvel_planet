import { getSourceImg } from '../../../helpers/getSrc';
import { Thumbnail } from '../../../../api/types/storiesType';
import s from './CardCharacter.module.scss';

type Props = {
  description?: string
  name: string
  src: Thumbnail
  id?: number
  attributionText?: string
  getSelectCharacter?: (id: number | undefined) => void
}

export const CardCharacter = ({src, name, description, attributionText, id, getSelectCharacter}: Props) => {
  const getSelectCharacterHandler = (id: number | undefined) => {
    getSelectCharacter && getSelectCharacter(id)
  }

  return (
    <div className={s.cardContainer} onClick={() => getSelectCharacterHandler(id)}>
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