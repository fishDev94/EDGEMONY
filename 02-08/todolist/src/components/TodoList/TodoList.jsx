import './index.css';
import TodoCard from '../TodoCard';

const TodoList = ({data, setList}) => {

    const onHandleClick = (index) => {
        // data.splice(index,1)
        setList(data.filter((_, id) => id !== index) )
        
    }

    return (
        <ul className="TodoList">
            {
                data.map((element, index, array) => <TodoCard id={index+1} data={array} onClick={onHandleClick} contentText={element} key={index}/>)
            }
        </ul>

    )
};

export default TodoList;

