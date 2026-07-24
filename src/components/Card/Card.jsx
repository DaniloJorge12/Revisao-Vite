import styles from './Card.module.css';

export default function Card({ imagem, nome, descricao, campeao }) {
    return (
        <article className={styles.card}>
            <img src={imagem || '/img/sem_foto.png'} alt={nome} />
            <h2>{nome || 'Sem nome'}</h2>
            <p className={styles.descricao}>{descricao || 'Sem descrição'}</p>
            <p>
                <p>
                    <span>Campeão:</span> {campeao > 0 ? '🏆'.repeat(campeao) : 'Nunca campeão'}
                </p>
            </p>
        </article>
    );
}
