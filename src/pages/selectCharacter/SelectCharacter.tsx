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
  series
}: Props) => {

  const storyItem = series.map(({name, resourceURI}) => {
    return (
      <>
        Name: <li>{name}</li>
        Resource:
        <li>
          <a href={`${resourceURI}'/82a3f4505d2327a6c55a63180971b5c6c0e7d47c'`}>Link</a>
        </li>
      </>
    )
  })

  return (
    <div className={s.container_select_card}>
      <h3 className={s.title_card}>{name}</h3>
      <div className={s.description_wrapper}>
        <div className={s.img_block}>
          <img src={getSourceImg(src)} alt={'Selected hero' || attributionText} />
        </div>
        <div className={s.description_block}>
          <p>{description}</p>
        </div>
      </div>

      <div>
        <ul>
          {storyItem}
        </ul>

      </div>

    </div>
  );
};