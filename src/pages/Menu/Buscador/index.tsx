import styles from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  search: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscador({ search, setBusca }: Props) {
  return (
    <div className={styles.buscador}>
      <input
        type="text"
        value={search}
        onChange={(ev) => setBusca(ev.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4C4D5E"/>
    </div>
  );
}
