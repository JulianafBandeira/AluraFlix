import { useState } from 'react'
import { HeaderVideo } from '../../components/HeaderVideo'
// import { v4 as uuidv4 } from 'uuid';
import { Footer } from '../../components/Footer';
import { Form } from '../../components/Form'
import { Categoria } from '../../components/TiposCategorias';


export const NovoVideo = () => {

    const [videos, setVideos] = useState([])

    const aoNovoVideoCadastrado = (video) => {

        setVideos([...videos, video])
    }


    return (
        <>
            <HeaderVideo />
            <Form/>

            <Footer />


        </>
    )
}