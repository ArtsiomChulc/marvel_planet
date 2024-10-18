import s from './DescriptionMainPage.module.scss';

type Props = {
  description: string;
  title: string;
}

export const DescriptionMainPage = ({title, description}: Props) => {
  return (
    <div className={s.desc_container}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};