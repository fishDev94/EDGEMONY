import './index.css';

const AdviceCard = ({data, onBtnClick}) => {

    return (
        <div className="AdviceCard">
            <p className="Advice_number">Advice #{data.slip?.id}</p>
            <p className='MainText'>{data.slip?.advice}</p>
            <button onClick={onBtnClick} className='btn-change'></button>
        </div>
    )
}

export default AdviceCard;