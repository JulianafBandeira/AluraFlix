import React from 'react';
import styles from './Card.module.css';
import cardamarelo1 from '../../assets/img/cardamarelo1.png';
import lixo from '../../assets/icons/lixo.png'
import editar from '../../assets/icons/editar.png'


export const Card = ({ props }) => {
    return (
        <div className={styles.divcard}>
            <img src={cardamarelo1} alt="imagem" className={styles.imagem} />
            <div className={styles.rodapecard}>
                <div className={styles.deletar}>
                    <img className={styles.icon} src={lixo} alt="" />
                    <h2 className={styles.textodeletar}>Deletar</h2>
                </div>

                <div className={styles.editar}>
                    <img src={editar} alt="" className={styles.icon} />
                    <h2 className={styles.textoeditar}>Editar</h2>
                </div>
            </div>
        </div>
    );
};
