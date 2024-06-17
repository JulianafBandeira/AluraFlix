import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from './logo.png'
import { HeaderLink } from '../HeaderLink'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img className={styles.image} src={logo} alt="Logo do alurafilx" />
            </Link>

            <nav className={styles.navbar}>
                <HeaderLink to="/">
                    Home
                </HeaderLink>

                <HeaderLink to="/novovideo">
                    Novo Vídeo
                </HeaderLink>
            </nav>
        </header>
    )
}