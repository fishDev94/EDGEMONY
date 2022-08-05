import './index.css'
import Button from '../Button';
const TodoCard = ({id, contentText, onClick}) => {
console.log('Todo card');
    return (
    <li className='Todo_element'>
        <div className='todo_text'>
        <p className="order-li">{id}:</p>
        <p>{contentText}</p>
        </div>
        <Button onClick={onClick}>X</Button>
    </li>
    )
}

export default TodoCard;