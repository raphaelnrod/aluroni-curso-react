import filtros from "./filtros.json";
import styles from "./Filtros.module.scss";
import classNames from 'classnames';

type IOption = typeof filtros[0];

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filter, setFilter }: Props) {
  function selectFilter(opt: IOption) {
    if(filter === opt.id) return setFilter(null);
    return setFilter(opt.id);
  }

  return (
    <div className={styles.filtros}>
      {filtros.map((opt) => (
        <button
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: filter === opt.id
          })}
          key={opt.id}
          onClick={() => selectFilter(opt)}
        >{opt.label}</button>
      ))}
    </div>
  );
}
