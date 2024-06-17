import { Card } from '../Card'
import { Titulo } from '../Titulo'
import styles from './SessaoCards.module.css'

export const SessaoCards = () => {
    return (
        <section className={styles.secards}>

            <div className={styles.container}>
                <Titulo><h2 className={styles.titulofront}>Font end</h2></Titulo>

                <div className={styles.front}>
                    <div className={styles.cardsfrontcontainer}>
                        <div className={styles.cardsfront}>
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.container}>

                <Titulo><h2 className={styles.tituloback}>Back end</h2></Titulo>
                <div className={styles.back}>
                    <div className={styles.cardsbackcontainer}>
                        <div className={styles.cardsback}>
                            <Card />
                            <Card />
                            <Card />
                        </div>

                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <Titulo><h2 className={styles.titulomobile}>Mobile</h2></Titulo>
                <div className={styles.mobile}>
                    <div className={styles.cardsmobilecontainer}>
                        <div className={styles.cardsmobile}>
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}