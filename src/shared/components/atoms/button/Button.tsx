import s from './Button.module.scss';
import { FC, HTMLAttributes } from 'react';
import { Loader } from '@consta/uikit/Loader';
import { presetGpnDefault, Theme } from '@consta/uikit/Theme';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
  disable?: boolean;
}

export const Button: FC<ButtonProps> = ({ title, className, disable, ...props }) => {
  return (

    <button {...props}
            className={`${s.button} ${className} ${disable ? s.disable : ''}`}
            disabled={disable}>
      <Theme preset={presetGpnDefault}>
        <span className={s.title_btn}>
          {disable ? <Loader size="s" /> : title}
        </span>
      </Theme>
    </button>

  );
};