import s from './Main.module.scss';
import { Character } from '../../api/types/types';
import {
  CardCharacter
} from '../../shared/components/molecules/cardCharacter/CardCharacter';

type Props = {
  characters: Character[];
}

export const Characters = ({characters}: Props) => {

  return <div className={s.characters_container}>
    {characters && characters.length > 0 ? (
      characters.map(({ thumbnail, name, id }) => (
        <CardCharacter key={id} name={name} src={thumbnail} id={id} />
      ))
    ) : (
      <div>No characters found</div>
    )}
  </div>
};
