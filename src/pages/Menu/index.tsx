import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg'
import Buscador from './Buscador';
import {useState} from 'react';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';

export default function Menu(){
    const [busca, setBusca] = useState("");
    const [filtro, setFilter] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState("");
    return (
        <main>
            <nav className={styles.menu}>
                <Logo/>
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do codigo e da massa
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador search={busca} setBusca={setBusca}></Buscador>
                <div className={styles.cardapio__filtros}>
                    <Filtros filter={filtro} setFilter={setFilter}/>
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
                </div>
                <Itens busca={busca} filtro={filtro} ordenador={ordenador}></Itens>
            </section>
        </main>
    )
}