import './index.css'
import Button from '../Button';
const TodoCard = ({id, contentText, onClick}) => {


    return (
    <li className='Todo_element'>
        <div className='todo_text'>
        <p className="order-li">{id}:</p>
        <p>{contentText}</p>
        </div>
        <Button onClick={() => onClick(id-1)}>X</Button>
    </li>
    )
}

export default TodoCard;