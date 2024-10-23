import s from './SelectCharacter.module.scss';
import { Thumbnail } from '../../api/types/storiesType';
import { getSourceImg } from '../../shared/helpers/getSrc';
import { SeriesItem } from '../../api/types/charactersTypes';

type Props = {
  description?: string
  name: string
  src: Thumbnail
  attributionText?: string
  series: SeriesItem[]
}

export const SelectCharacter = ({
                                  src,
                                  name,
                                  attributionText,
                                  description,
                                  series,
                                }: Props) => {
  const defaultDescription = 'It\'s a pity that there is no description of this character, but that doesn\'t make him any less significant.';

  const seriesItem = series.map(({ name }) => {
    return (
      <>
        <span className={s.series_item}>{name}</span>
      </>
    );
  });

  return (
    <div className={s.container_select_card}>
      <h3 className={s.title_card}>{name}</h3>
      <div className={s.description_wrapper}>
        <div className={s.img_block}>
          <img src={getSourceImg(src)} alt={'Selected hero' || attributionText} />
        </div>
        <div className={s.description_block}>
          <p>{description || defaultDescription}</p>
        </div>
      </div>
      <div className={s.series_wrapper}>
        <h4>Appearance in episodes</h4>
        <div className={s.series_items}>
          {seriesItem}
        </div>
      </div>


    </div>
  );
};