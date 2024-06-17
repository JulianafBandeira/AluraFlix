
import React from 'react'
import { Card } from '../Card'

export const Categoria = (props) => {
    return (
        <div>

            {props.videos.map(video => <Card key={video.nome}
                imagem={video.imagem} />)}
        </div>
    )
}