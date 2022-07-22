import { useState } from 'react';
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import Modal from './components/Modal';
import filmList from './assets/localFilmList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [modalData, setModalData] = useState({});
  const [isModalVisibile, setModalVisibility] = useState(false);
  
  const onHandleModal = (data) => {
    setModalData(data);
    setModalVisibility(!isModalVisibile);
  };
  
  return (
    <div className="App">
      <Navbar />
      <CardList
        title="Top series"
        BASE_URL='https://edgemony-backend.herokuapp.com/series'
        modalVisibility={onHandleModal}
      />
      <CardList
        title="Top Movies"
        BASE_URL='https://edgemony-backend.herokuapp.com/movies'
        modalVisibility={onHandleModal}
      />
      <CardList
        title="Local Movies"
        localURL={filmList}
        modalVisibility={onHandleModal}
      />

      <Footer />
      <Modal data={modalData} isVisibile={isModalVisibile} onModalClick={setModalVisibility}/>
    </div>
  );
}

export default App;