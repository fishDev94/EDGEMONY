import './index.css';

export default function TodoCard({taskNumber, taskText, onClick}) {

    return (
        <div className="TodoCard">
            <div className="TodoCard__item_container">
                <h4>{taskNumber}</h4>
                <p>{taskText}</p>
            </div>
            <button className='TodoCard__button' onClick={onClick}><span>X</span></button>
        </div>
    )
}