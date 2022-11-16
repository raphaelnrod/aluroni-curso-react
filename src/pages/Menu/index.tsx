import styles from "./Menu.module.scss";
import stylesTema from 'styles/Tema.module.scss';
import Buscador from "./Buscador";
import { useState } from "react";
import Filtros from "./Filtros";
import Ordenador from "./Ordenador";
import Itens from "./Itens";

export default function Menu() {
  const [busca, setBusca] = useState("");
  const [filtro, setFilter] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");
  return (
      <section className={styles.cardapio}>
        <h3 className={stylesTema.titulo}>Cardápio</h3>
        <Buscador search={busca} setBusca={setBusca}></Buscador>
        <div className={styles.cardapio__filtros}>
          <Filtros filter={filtro} setFilter={setFilter} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador}></Itens>
      </section>
  );
}
