import styles from './HeaderVideo.module.css'
import { HeaderLinkVideos } from '../HeaderLinkVideos'
import logo from './logo.png'
import { Link } from 'react-router-dom'

export const HeaderVideo = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img className={styles.image} src={logo} alt="Logo do alurafilx" />
            </Link>

            <nav className={styles.navbar}>
                <HeaderLinkVideos to="/">
                    Home
                </HeaderLinkVideos>

                <HeaderLinkVideos to="/novovideo">
                    Novo Vídeo
                </HeaderLinkVideos>
            </nav>
        </header>
    )
}