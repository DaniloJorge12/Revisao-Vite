import { useState } from "react";
import styles from "./Home.module.css";
import times from "../../data/times.json";
import Header from "../../components/Header/Header"

export default function Home() {
    const [cards, setCards] = useState(times);
    const [carregando, setCarregando] = useState(false);

    return carregando ? (
        <main className={styles.loading}>
            <img src="/loading.gif" alt="Carregando..." />
        </main>
    ) : (
        <>
            <Header quantidadeTimes={cards.length} />

            <section>
                <h2>Conteúdos revisados</h2>
                <ul>
                    <li>Componentes</li>
                    <li>Props</li>
                    <li>Hooks</li>
                </ul>
            </section>

            <main className={styles.container}>
                {cards.map((card) => (
                    <article key={card.id} className={styles.card}>
                        <img src={card.imagem} alt={card.nome} />
                        <h2>{card.nome}</h2>
                        <p className={styles.descricao}>{card.descricao}</p>
                        <p>
                            <span>Campeão:</span> {'🏆'.repeat(card.campeao)}
                        </p>
                    </article>
                ))}
            </main>
        </>
    );



}
