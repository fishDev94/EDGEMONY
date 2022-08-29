import './index.css';

export default function InputTodo({onClick,value, setValue, method}) {

    return (
        <div className="InputTodo" onSubmit={(e) => method(e)} >
            <form className='InputTodo_form'>
            <input onChange={(e) => setValue(e.target.value)} value={value} className='InputTodo__input' type='text' placeholder="Enter your Task..." />
            <button className='InputTodo__button' onClick={onClick} >+</button>
            </form>
        </div>
    )
}