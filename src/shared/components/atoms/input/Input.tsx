import { FC, InputHTMLAttributes } from 'react';
import s from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const Input: FC<InputProps> = ({
   label,
   error,
   className,
   ...props
}) => {
  return (
    <div className={`${s.input_container} ${className}`}>
      {label && <label className={s.input_label}>{label}</label>}

      <input className={`${s.input} ${error ? s.input_error : ''}`} {...props} />

      {error && <span className={s.input_error_message}>{error}</span>}
    </div>
  );
};