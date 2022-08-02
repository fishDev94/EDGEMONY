import './index.css';
import TodoCard from '../TodoCard';

const TodoList = ({data, dltBtn}) => {


    return (
        <ul className="TodoList">
            {
                data.map((element) => <TodoCard contentText={element.text} onClick={dltBtn(element.id)} id={element.id} key={element.id}/>)
            }
        </ul>

    )
};

export default TodoList;

