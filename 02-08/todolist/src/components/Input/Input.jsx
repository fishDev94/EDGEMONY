import './index.css'

const Input = ({inputValue, onChange}) => {



    return (
        <input className="input_todo" type="text" placeholder="Inserisci il testo" value={inputValue} onChange={onChange} />
    )
}

export default Input;