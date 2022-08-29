import './index.css';

export default function InputTodo({onClick}) {

    return (
        <div className="InputTodo">
            <input className='InputTodo__input' type='text' placeholder="Enter your Task..." />
            <button className='InputTodo__button' onClick={onClick} >+</button>
        </div>
    )
}