import { Input } from '../../shared/components/atoms/input/Input';
import s from './Home.module.scss';
import { Button } from '../../shared/components/atoms/button/Button';
import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import { getCharacterBySearch } from '../../bll/reducers/charactersSlice';
import {
  CardCharacter,
} from '../../shared/components/molecules/cardCharacter/CardCharacter';

export const Home = () => {
  const dispatch = useAppDispatch();

  const foundCharacters = useAppSelector(state => state.characters.foundCharacter);

  const [value, setValue] = useState('');

  const getValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const getSearchCharacter = () => {
    if (value.trim()) {
      dispatch(getCharacterBySearch(value));
    }
    setValue('');
  };

  const result = foundCharacters?.map(({ name, thumbnail, id }) => {
    return <CardCharacter name={name} src={thumbnail} key={id} />;
  });

  return (
    <>
      <div className={s.page_container}>
        <Input label={'Tap to search...'} value={value} onChange={getValue} />
        <Button title={'Search'} onClick={getSearchCharacter} />
      </div>
      <div className={s.result_container}>
        {result}
      </div>
    </>
  );
};