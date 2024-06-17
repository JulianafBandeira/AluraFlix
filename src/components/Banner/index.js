import styles from './Banner.module.css'
import banner from '../../assets/img/banner.png'

export const Banner = () => {
    return (
        <main className={styles.banner}>
            <div className={styles.conteudobanner}>


                <article className={styles.textos}>
                    <h1 className={styles.titulo}>Front end</h1>
                    <h2 className={styles.p1}>SEO com React</h2>
                    <p className={styles.p2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam atque provident alias unde. Tenetur quod rem illo quia, quisquam ex
                        delectus facilis eveniet non assumenda reiciendis officia ipsum magni! reiciendis officia ipsum magni  assumenda reiciendis officia ipsum magni! reiciendis officia ipsum magni  assumenda reiciendis officia ipsum magni! reiciendis officia ipsum magni!psum magni  assumenda reiciendis officia ipsum magni! reiciendis officia ipsum magni  assumenda reiciendis officia ipsum magni! reiciendis officia ipsum magni! </p>
                </article>

                <article className={styles.cardimg}>

                    <img className={styles.imgbanner} src={banner} alt="" />
                </article>


            </div>
        </main>
    )
}