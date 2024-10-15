import s from './Button.module.scss';
import { FC, HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
}

export const Button: FC<ButtonProps> = ({title, className, ...props}) => {
  return (
    <button {...props} className={`${s.button} ${className}`}>
      {title}
    </button>
  );
};