import { Thumbnail } from '../../../../api/types/storiesType';
import { getSourceImg } from '../../../helpers/getSourceImg';
import s from './CardStories.module.scss';

type Props = {
  description?: string
  title: string
  src: Thumbnail | null
}

export const CardStories = ({ src, title, description }: Props) => {

  return (
    <div className={s.cardContainer}>
      <h3 className={s.name_card} title={title}>{title}</h3>
      <div className={s.imgBox}>
        <img src={getSourceImg(src)} alt={title} />
      </div>
      {description && <div className={s.text_wrapper}>
        <p className={s.card_description}>{description}</p>
      </div>}
    </div>
  );
};