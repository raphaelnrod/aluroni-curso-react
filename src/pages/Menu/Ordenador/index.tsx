import styles from "./Ordenador.module.scss";
import options from "./opcoes.json";
import { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface Props {
    ordenador: string;
    setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

export default function Ordenador({ordenador, setOrdenador}: Props) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && options.find(o => o.value === ordenador)?.nome;
  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles['ordenador--ativo']]: ordenador !== ""
      })}
      onBlur={() => setAberto(false)}
      onClick={() => setAberto(!aberto)}
    >
      <span>{nomeOrdenador || 'Ordenar Por'}</span>
      {aberto ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles["ordenador__options--ativo"]]: aberto,
        })}
      >
        {options.map((opt) => (
          <div className={classNames({
            [styles.ordenador__option]: true,
            [styles['ordenador__option--ativo']]: ordenador === opt.value && ordenador != ''
          })} key={opt.value} onClick={() => setOrdenador(opt.value)}>
            {opt.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
