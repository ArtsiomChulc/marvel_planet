import { Button } from '../../shared/components/atoms/button/Button';
import {
  CardCharacter,
} from '../../shared/components/molecules/cardCharacter/CardCharacter';
import {
  NotFoundCharacters,
} from '../../shared/components/atoms/notFoundCharacters/NotFoundCharacters';
import { PreLoader } from '../../shared/components/atoms/preLoader/PreLoader';
import { FC } from 'react';
import { Character } from '../../api/types/charactersTypes';
import s from './Home.module.scss';
import { useNavigate } from 'react-router-dom';

interface Props {
  foundCharacters: Character[] | null;
  attributionText: string;
  isLoading: boolean;
  clearCharacters: () => void;
}

export const Home: FC<Props> = (
  {
    clearCharacters,
    isLoading,
    attributionText,
    foundCharacters,
}) => {
  const navigate = useNavigate()

  const getSelectCharacter = (id: number | undefined) => {
    if (id) {
      navigate(`/${id}`);
    }
  }

  const result = foundCharacters?.map(({ name, thumbnail, id }) => {
    return <CardCharacter attributionText={attributionText} getSelectCharacter={getSelectCharacter} id={id} name={name} src={thumbnail}
                          key={id} />;
  });

  return (
    <>
      <div className={s.result_container}>
        {isLoading ? (
          <PreLoader />
        ) : result && result.length === 0 ? (
          <NotFoundCharacters />
        ) : (
          <div className={s.wrap_result}>
            {result && result.length > 0 &&
              <Button onClick={clearCharacters} title={'Clear'} />}
            <div className={s.result_box}>
              {result}
            </div>
          </div>
        )}
      </div>
    </>
  );
};