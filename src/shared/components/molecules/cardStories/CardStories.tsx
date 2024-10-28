import { Thumbnail } from '../../../../api/types/storiesType';
import { getSourceImg } from '../../../helpers/getSourceImg';
import s from './CardStories.module.scss';

type Props = {
  description?: string
  name: string
  src: Thumbnail | null
  id?: number
  attributionText?: string
  getSelectCharacter?: (id: number | undefined) => void
}

export const CardStories = ({src, name, description, attributionText, id, getSelectCharacter}: Props) => {
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
          className={s.name_card} title={name}>{name}</h3>
        {description && <p className={s.card_description}>{description}</p>}
      </div>
      <span className={s.card_attribution}>{attributionText}</span>
    </div>
  );
};