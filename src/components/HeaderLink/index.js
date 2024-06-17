import { Link, useLocation } from 'react-router-dom'
import styles from './HeaderLink.module.css'

export const HeaderLink = ({ children, to }) => {
    const localizacao = useLocation()
    return (
        <Link className={`
            ${styles.link}
            ${localizacao.pathname === to ? styles.linkDestacado : ""}
        `} to={to}>
            {children}
        </Link>
    )
}