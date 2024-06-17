import styles from './Footer.module.css'
import logo from './logo.png'

export const Footer = () =>{
    return(
        <footer className={styles.footer}>
            <img className={styles.logo} src={logo} alt="" />
        </footer>
    )
}