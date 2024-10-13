import { Thumbnail } from '../../api/types/storiesType';

export const getSourceImg = (thumb: Thumbnail | null) => {
  if(thumb) {
    return `${thumb.path}.${thumb.extension}`
  }
  return undefined
}