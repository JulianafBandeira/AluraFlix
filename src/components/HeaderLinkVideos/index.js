import { Link, useLocation } from 'react-router-dom'
import styles from './HeaderLinkVideos.module.css'

export const HeaderLinkVideos = ({ children, to }) => {
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