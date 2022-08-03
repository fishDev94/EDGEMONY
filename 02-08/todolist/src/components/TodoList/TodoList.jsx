import './index.css';
import TodoCard from '../TodoCard';

const TodoList = ({data, dltBtn}) => {


    return (
        <ul className="TodoList">
            {
                data.map((element, index) => <TodoCard contentText={element.text} onClick={() => dltBtn(element.id)} id={index + 1} key={index}/>)
            }
        </ul>

    )
};

export default TodoList;

