import { Banner } from '../../components/Banner'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { SessaoCards } from '../../components/SessaoCards'

export const Inicio = () => {
    return (
        <>
        <Header />
        <Banner imagem="home"/>
        <SessaoCards/>


        <Footer/>
        </>
    )
}
