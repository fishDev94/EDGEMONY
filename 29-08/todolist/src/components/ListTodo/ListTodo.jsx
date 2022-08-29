import TodoCard from '../TodoCard'
import './index.css'

export default function ListTodo ({items, onCancelClick}) {

    return (
        <div className="ListTodo">
            {items.map((item, index) => <TodoCard taskNumber={index+1} taskText={item} key={index} onClick={() => onCancelClick(index)} />)}
        </div>
    )
}