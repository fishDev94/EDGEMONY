import { useState } from 'react';
import Navbar from './components/Navbar';
import AddMessage from './components/AddMessage';
import FriendCardList from './components/FriendCardList';
import MessageCardList from './components/MessageCardList';
import './App.css';
import ModalWindow from './components/ModalWindow';
import { useEffect } from 'react';
import logostarwars from './assets/logostarwars.png';


function App() {
  const [isRenderedList, setRenderedList] = useState(false);
 const [searchValue, setSearchValue] = useState('');
 const [isLoginWindowVisible, setIsLoginWindowVisible] = useState(true);
  
 useEffect(() => {
  if (localStorage.getItem('username')) {
setIsLoginWindowVisible(false);
  }

  
 }, [])
 
 const images = [
  {
    
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d937cb17998561.5635a605a208c.png',
    thumbnailHeight: '90px',
    thumbnailWidth: '40px',
  },
  {
    

    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/29bd6417998561.5635a605ad357.png',
    thumbnailHeight: '90px',
    thumbnailWidth: '40px',
  },
  {
    

    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/8dd7e817998561.5635a605b5684.png',
    thumbnailHeight: '90px',
    thumbnailWidth: '40px',
  },
  {
      

      thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/29dd2a17998561.5635a605bf76c.png',
      thumbnailHeight: '90px',
      thumbnailWidth: '40px',
  },
  {
      

      thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/4134a417998561.5635a605c6ed2.png',
      thumbnailHeight: '90px',
      thumbnailWidth: '40px',
  },
  {
      

      thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/8f834817998561.5635a605c8d17.png',
      thumbnailHeight: '90px',
      thumbnailWidth: '40px',
  },
  {
      

      thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/5508a017998561.5635a605cd904.png',
      thumbnailHeight: '90px',
      thumbnailWidth: '40px',
  },
  {
      

      thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/57f58517998561.5635a605d2424.png',
      thumbnailHeight: '90px',
      thumbnailWidth: '40px',
  },
  {
      

      thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/4af31517998561.5635a605daa24.png',
      thumbnailHeight: '90px',
      thumbnailWidth: '40px',
  },
  {
      

      thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7d244617998561.5635a605e3323.png',
      thumbnailHeight: '90px',
      thumbnailWidth: '40px',
  },
  {
      

      thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/e738ae17998561.5635a605e81c7.png',
      thumbnailHeight: '90px',
      thumbnailWidth: '40px',
  },
  
];

  return (
    <div className="App">
      <Navbar />
      {
        isLoginWindowVisible &&
        <ModalWindow logo={logostarwars} images={images} type='login' setRenderedList={setRenderedList} setIsLoginWindowVisible={setIsLoginWindowVisible} isRenderedList={ isRenderedList } onAddButton={ setRenderedList }/>} 
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