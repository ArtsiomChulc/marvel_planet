import { Input } from '../../shared/components/atoms/input/Input';
import { Button } from '../../shared/components/atoms/button/Button';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import {
  clearFoundCharacter,
  getCharacterBySearch,
} from '../../bll/reducers/charactersSlice';
import {
  CardCharacter,
} from '../../shared/components/molecules/cardCharacter/CardCharacter';
import s from './Home.module.scss';
import {
  NotFoundCharacters,
} from '../../shared/components/atoms/notFoundCharacters/NotFoundCharacters';
import { PreLoader } from '../../shared/components/atoms/preLoader/PreLoader';

export const Home = () => {
  const dispatch = useAppDispatch();

  const foundCharacters = useAppSelector(state => state.characters.foundCharacter);
  const isLoading = useAppSelector(state => state.characters.loading);

  const [value, setValue] = useState('');
  const [focus, setFocus] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isActive = focus || value.length > 0;

  useEffect(() => {
    return () => {
      dispatch(clearFoundCharacter());
      setValue('');
    };
  }, [dispatch]);

  const getValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (error) {
      setError(false);
      setErrorMessage('');
    }
  };

  const getSearchCharacter = () => {
    if (value.length > 2) {
      setError(false);
      setErrorMessage('');
      dispatch(getCharacterBySearch(value));
    } else {
      setError(true);
      setErrorMessage('Enter more than two characters');
    }
  };

  const handleBlur = () => {
    if (!value) {
      setFocus(false);
      setError(false);
    }
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      getSearchCharacter();
    }
  };

  const clearCharacters = () => {
    dispatch(clearFoundCharacter());
    setValue('');
  }

  const result = foundCharacters?.map(({ name, thumbnail, id }) => {
    return <CardCharacter name={name} src={thumbnail} key={id} />;
  });

  return (
    <>
      <div className={s.form_container}>
        <Input label={'Enter to search...'}
               value={value} onChange={getValue}
               onBlur={handleBlur}
               onFocus={handleFocus}
               onKeyDown={handleKeyDown}
               isActive={isActive}
               error={error}
               errorMessage={errorMessage}
        />
        <Button title={'Search'} onClick={getSearchCharacter} />
      </div>
      <div className={s.result_container}>
        {isLoading ? (
          <PreLoader />
        ) : result && result.length === 0 ? (
          <NotFoundCharacters />
        ) : (
          <div className={s.wrap_result}>
            {result && result.length > 0 && <Button onClick={clearCharacters} title={'Clear'} />}
            {result}
          </div>
        )}
      </div>
    </>
  );
};