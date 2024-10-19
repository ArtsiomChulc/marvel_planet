import s from './PreLoader.module.scss';

export const PreLoader = () => {
  const line_loader = Array.from({ length: 10 }).map((_, i) => {
    return (
      <div key={i} className={s.loader_line}></div>
    )
  });
  return (
    <div className={s.loader}>
      {line_loader}
    </div>
  );
};
