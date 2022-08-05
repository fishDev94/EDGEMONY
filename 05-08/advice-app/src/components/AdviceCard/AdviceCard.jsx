import './index.css';

const AdviceCard = ({data, onBtnClick}) => {

    return (
        <div className="AdviceCard">
            <p className="Advice_number">Advice #{data.slip ? data.slip.id : 'loading...'}</p>
            <p className='MainText'>{data.slip ? data.slip.advice : 'loading...'}</p>
            <button onClick={onBtnClick} className='btn-change'></button>
        </div>
    )
}

export default AdviceCard;