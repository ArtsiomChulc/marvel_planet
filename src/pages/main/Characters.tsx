import s from './Main.module.scss';
import { Character } from '../../api/types/types';
import {
  CardCharacter,
} from '../../shared/components/molecules/cardCharacter/CardCharacter';
import { useAppSelector } from '../../app/hooks/hooks';

type Props = {
  characters: Character[];
}

export const Characters = ({ characters }: Props) => {
  const isLoading = useAppSelector(state => state.main.loading);

  const charactersItems = () => {
    if (characters.length !== 0 && !isLoading) {
      return characters.map(({ thumbnail, name, id }) => (
        <CardCharacter key={id} name={name} src={thumbnail} id={id} />
      ));
    }
  };

  return (
    <div className={s.characters_container}>
      {charactersItems()}
    </div>
  );
};
