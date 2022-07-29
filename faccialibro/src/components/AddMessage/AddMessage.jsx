import { useState } from 'react';
import { POST } from '../../utils/api.js';

import Button from '../Button';
import './index.css';

const AddMessage = ({ isRenderedList, onAddButton }) => {
  // Controlled component!!! - Forms e input
  const [messageText, setMessageText] = useState('');

  const newData = () => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const day = new Date().toLocaleDateString();

    return (`${day.split('/').reverse().join('/')} ${hours}:${minutes}`);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (messageText) {
      POST('messages', {
        text: messageText,
        sender: localStorage.getItem('username'),
        date: newData()
      })
      .then(() => {
        setMessageText('');
        onAddButton(!isRenderedList);
      })
    }
  }

  return (
    <form className="AddMessage" onSubmit={onFormSubmit}>
      <input
        className="AddMessage__text"
        type="text"
        placeholder="Scrivi il messaggio..."
        value={ messageText }
        onChange={(e) => setMessageText(e.target.value)}
        required
      />
      
      <Button type="submit" textContent='Invia' color='lightseagreen' />
    </form>
  )
}

export default AddMessage;