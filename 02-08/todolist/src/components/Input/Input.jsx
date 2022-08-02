import './index.css'

const Input = ({ onChange, value}) => {



    return (
        <input className="input_todo" type="text" placeholder="Inserisci il testo" value={value} onChange={onChange} />
    )
}

export default Input;