import { FC, InputHTMLAttributes } from 'react';
import s from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  errorMessage?: string
  className?: string;
  isActive: boolean;
}

export const Input: FC<InputProps> = ({
   label,
   error,
   className,
   isActive,
   errorMessage,
   ...props
}) => {

  const inputClassName = `${s.input} ${isActive ? s.input_active : ''} ${error ? s.input_error : ''}`;

  return (
    <div className={`${s.input_container} ${className}`}>
      {label && <label className={`${s.input_label} ${isActive ? s.input_label_active : ''}`}>{label}</label>}

      <input className={inputClassName} {...props} onBlur={props.onBlur} onFocus={props.onFocus} />

      {error && <span className={s.input_error_message}>{errorMessage}</span>}
    </div>
  );
};