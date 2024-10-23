import { Character } from '../../api/types/charactersTypes';
import {
  CardCharacter,
} from '../../shared/components/molecules/cardCharacter/CardCharacter';
import { useAppSelector } from '../../app/hooks/hooks';
import { Pagination } from '@consta/uikit/Pagination';
import { presetGpnDefault, Theme } from '@consta/uikit/Theme';
import s from './Characters.module.scss';
import './stylePagination.css'
import { useNavigate } from 'react-router-dom';

type Props = {
  characters: Character[];
  currentPage: number
  pageCount: number
  onChangePage: (currentPage: number) => void
  attributionText?: string;
}

export const Characters = ({ characters, attributionText, currentPage, onChangePage, pageCount }: Props) => {

  const isLoading = useAppSelector(state => state.characters.loading);

  const navigate = useNavigate();

  const getSelectCharacter = (id: number | undefined) => {
    if (id) {
      navigate(`/characters/${id}`);
    }
  }

  const charactersItems = () => {
    if (characters.length !== 0 && !isLoading) {
      return characters.map(({ thumbnail, name, id }) => (
        <CardCharacter key={id} attributionText={attributionText} getSelectCharacter={getSelectCharacter} name={name} src={thumbnail} id={id} />
      ));
    }
  };

  return (
    <Theme preset={presetGpnDefault}>
      <div className={s.pagination_block}>
        <Pagination value={currentPage}
                    onChange={onChangePage}
                    items={pageCount}
                    showFirstPage
                    showLastPage
                    visibleCount={7}
                    arrows={[true, true]}
                    form={'brick'}
                    size={'m'}
                    className={'pagination'}
        />
      </div>

      <div className={s.characters_container}>
        {charactersItems()}
      </div>

      <div className={s.pagination_block}>
        <Pagination value={currentPage}
                    onChange={onChangePage}
                    items={pageCount}
                    showFirstPage
                    showLastPage
                    visibleCount={7}
                    arrows={[true, true]}
                    form={'brick'}
                    size={'m'}
                    className={'pagination'}
        />
      </div>
    </Theme>

  );
};
