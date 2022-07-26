import { useState, useEffect } from 'react';
import MessageCard from '../MessageCard';
import { GET } from '../../utils/api';
import './index.css';

const MessageCardList = ({ isRenderedList, setRenderedList, deleteCondition }) => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
      GET('messages').then((data) => setMessageList(data));
  }, [isRenderedList]);

  const dateSort = (a, b) => a.date < b.date ? 1 : -1;

  return (
    <div className="MessageCardList">
      {
        messageList.length
          ? messageList.sort((a, b) => dateSort(a,b)).map(message => <MessageCard deleteCondition={deleteCondition} isRenderedList={isRenderedList} onDeleteBtn={setRenderedList} textContent={ message } key={ message.id }/>)
          : <p>Loading...</p>
      }
    </div>
  )
}

export default MessageCardList;