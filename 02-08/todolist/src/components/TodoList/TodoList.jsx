import './index.css';
import TodoCard from '../TodoCard';
import React from 'react';

const TodoList = ({data, dltBtn}) => {
console.log('sono todo list')
    return (
        <ul className="TodoList">
            {
                data.map((element, index) => <TodoCard contentText={element.text} onClick={() => dltBtn(element.id)} id={index + 1} key={index}/>)
            }
        </ul>
    )
};

export default React.memo(TodoList);

