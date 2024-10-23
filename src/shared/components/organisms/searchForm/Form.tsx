import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';
import { ChangeEvent, FC, KeyboardEvent } from 'react';
import s from './Form.module.scss';

interface SearchFormProps {
  value: string;
  isActive: boolean;
  error: boolean;
  errorMessage: string;
  getValue: (e: ChangeEvent<HTMLInputElement>) => void;
  getSearchCharacter: () => void;
  handleBlur: () => void;
  handleFocus: () => void;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}

export const SearchForm: FC<SearchFormProps> = ({
  value,
  isActive,
  error,
  errorMessage,
  getValue,
  getSearchCharacter,
  handleBlur,
  handleFocus,
  handleKeyDown,
  isLoading,
}) => {
  return (
    <div className={s.form_container}>
      <Input
        label={'Enter to search...'}
        value={value}
        onChange={getValue}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        isActive={isActive}
        error={error}
        errorMessage={errorMessage}
      />
      <Button title={'Search'} onClick={getSearchCharacter} disable={isLoading} />
    </div>
  );
};