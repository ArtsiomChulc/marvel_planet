import { Thumbnail } from '../../api/types/storiesType';
import commonImg from '../../assets/img/common_img.webp';

export const getSourceImg = (thumb: Thumbnail | null) => {
  if (thumb) {
    return `${thumb.path}.${thumb.extension}`;
  }
  return commonImg;
};