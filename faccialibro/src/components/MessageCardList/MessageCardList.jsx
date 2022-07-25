import { useState, useEffect } from 'react';
import MessageCard from '../MessageCard';
import { DELETE } from '../../utils/api'
import './index.css';

import { GET } from '../../utils/api.js'


const MessageCardList = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    // fetch('https://edgemony-backend.herokuapp.com/messages')
    //   .then(res => res.json())
    //   .then(data => setMessageList(data))

    GET('messages')
    .then(data => setMessageList(data));

  }, [])
 
  const dateSort = (a, b) => a.date < b.date ? 1 : -1;

  

  return (
    <div className="MessageCardList">
      
      {
        messageList.length
          ? messageList.sort((a, b) => dateSort(a,b)).map(message => <MessageCard DeleteMessageCard={() => {DELETE('messages/', message.id).then(() => window.location.reload())}} textContent={ message } key={ message.id }/>)
          : <p>Loading...</p>
      }
    </div>
  )
}

export default MessageCardList;