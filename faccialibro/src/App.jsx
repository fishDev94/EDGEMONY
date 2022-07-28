import { useState } from 'react';
import Navbar from './components/Navbar';
import AddMessage from './components/AddMessage';
import FriendCardList from './components/FriendCardList';
import MessageCardList from './components/MessageCardList';
import './App.css';
import ModalWindow from './components/ModalWindow';
import { useEffect } from 'react';
import logo from './assets/logoipsum.svg'


function App() {
  const [isRenderedList, setRenderedList] = useState(false);
 const [searchValue, setSearchValue] = useState('');
 const [isLoginWindowVisible, setIsLoginWindowVisible] = useState(true);
  
 useEffect(() => {
  if (localStorage.getItem('username')) {
setIsLoginWindowVisible(false);
  }

 }, [])
 

  return (
    <div className="App">
      <Navbar />
      {
        isLoginWindowVisible &&
        <ModalWindow logo={logo} type='login' setRenderedList={setRenderedList} setIsLoginWindowVisible={setIsLoginWindowVisible} isRenderedList={ isRenderedList } onAddButton={ setRenderedList }/>} 
      <div className="MainContent">
        <div className="App__friends">
          <h3>Lista degli amici</h3>
          <FriendCardList isRenderedList={ isRenderedList} filterMsgFriends={setSearchValue} searchValue={searchValue} setRenderedList={setRenderedList} />
        </div>
        <div className="App_messages">
          <AddMessage isRenderedList={ isRenderedList } onAddButton={ setRenderedList }/>
          <input onChange={(e) => setSearchValue(e.target.value)} type="text" className="search_msg" placeholder="Search"></input>
          <MessageCardList filterValue={searchValue} isRenderedList={ isRenderedList } setRenderedList={setRenderedList}/>
        </div>
      </div>
    </div>
  );
}

export default App;