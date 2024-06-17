import styles from './CampoTexto.module.css'

export const CampoTexto = () => {
    const placeholderModificada = `${props.placeholder}...`


    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }

    return (
        <div className="campo-texto">
            <label htmlFor="">
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} type="text" placeholder={placeholderModificada} />
        </div>
    )
}