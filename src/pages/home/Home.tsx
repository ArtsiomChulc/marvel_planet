import { Input } from '../../shared/components/atoms/input/Input';
import s from './Home.module.scss';
import { Button } from '../../shared/components/atoms/button/Button';
import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import { getCharacters } from '../../bll/reducers/charactersSlice';
import {
  CardCharacter,
} from '../../shared/components/molecules/cardCharacter/CardCharacter';

export const Home = () => {
  const dispatch = useAppDispatch();

  const characters = useAppSelector(state => state.characters.data.data.results);

  const [value, setValue] = useState('');

  const getValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const getSearchCharacter = () => {
    if (value.trim()) {
      dispatch(getCharacters(value));
    }
    setValue('')
  };

  const result = characters.map(({ name, thumbnail, id }) => {
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