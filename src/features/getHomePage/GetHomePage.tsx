import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import {
  clearFoundCharacter,
  getCharacterBySearch,
} from '../../bll/reducers/charactersSlice';
import { Home } from '../../pages/home/Home';
import {
  DescriptionMainPage
} from '../../shared/components/atoms/descriptionMainPage/DescriptionMainPage';
import { SearchForm } from '../../shared/components/organisms/searchForm/Form';

export const GetHome = () => {
  const dispatch = useAppDispatch();

  const {
    data,
    loading: isLoading,
    foundCharacter: foundCharacters,
  } = useAppSelector(state => state.characters);
  const { attributionText } = data;

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
  };

  return (
    <>
      <DescriptionMainPage title={'Search Marvel Heroes'}
                           description={'Enter a search query,' +
                             ' click on the search button and get a list of ' +
                             'your favorite Marvel heroes'} />
      <SearchForm value={value}
                  getSearchCharacter={getSearchCharacter}
                  isLoading={isLoading}
                  getValue={getValue}
                  error={error}
                  errorMessage={errorMessage}
                  handleBlur={handleBlur}
                  handleFocus={handleFocus}
                  handleKeyDown={handleKeyDown}
                  isActive={isActive} />

      <Home isLoading={isLoading} attributionText={attributionText} clearCharacters={clearCharacters} foundCharacters={foundCharacters}/>
    </>
  );
};