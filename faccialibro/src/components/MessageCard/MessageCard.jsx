import './index.css';

const MessageCard = ({textContent, DeleteMessageCard}) => {
  return (
    <div className="MessageCard">
      <div className="MainContent__card">
        <p className="MessageCard__text">
          { textContent.text }
        </p>
        <div className="MessageCard__info">
          <p className="MessageCard__info--sender">
            { textContent.sender }
          </p>
          <p className="MessageCard__info--date">
            { textContent.date }
          </p>
        </div>
      </div>
      <div onClick={DeleteMessageCard} className="DeleteBtn">x</div>
    </div>
  )
}

export default MessageCard;