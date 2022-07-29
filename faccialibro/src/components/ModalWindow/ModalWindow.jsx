import './index.css';
import Button from '../Button'
import AddFriend from '../AddFriend';
import ImageGallery from 'react-image-gallery';

const ModalWindow = ({mainModalText, setCondition, setVisibile, deleteFn, type,isRenderedList, onAddButton, setIsLoginWindowVisible, setRenderedList, logo}) => {

    const images = [
        {
          original: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d937cb17998561.5635a605a208c.png',
          originalHeight: '40px',
          thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d937cb17998561.5635a605a208c.png',
        },
        {
          original: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-4.jpg',
          originalHeight: '40px',
          thumbnail: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-4.jpg',
        },
        {
          original: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-5.jpg',
          originalHeight: '40px',
          thumbnail: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-5.jpg',
        },
        {
            original: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-6.jpg',
            originalHeight: '40px',
            thumbnail: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-6.jpg',
        },
        {
            original: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-7.jpg',
            originalHeight: '40px',
            thumbnail: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-7.jpg',
        },
        {
            original: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-8.jpg',
            originalHeight: '40px',
            thumbnail: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-8.jpg',
        },
        {
            original: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-9.jpg',
            originalHeight: '40px',
            thumbnail: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-9.jpg',
        },
        {
            original: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-10.jpg',
            originalHeight: '40px',
            thumbnail: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-10.jpg',
        },
        {
            original: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-11.jpg',
            originalHeight: '40px',
            thumbnail: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-11.jpg',
        },
        {
            original: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-12.jpg',
            originalHeight: '40px',
            thumbnail: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-12.jpg',
        },
        {
            original: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-13.jpg',
            originalHeight: '40px',
            thumbnail: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-13.jpg',
        },
        {
            original: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-14.jpg',
            originalHeight: '40px',
            thumbnail: 'https://www.scifidesign.com/wp-content/uploads/2015/03/minimalist-star-wars-icons-14.jpg',
        },
      ];

    return (
        <div className="ModalWindow">
            <div className={type === 'submit' ? 'ModalWindow__content' : type === 'login' && 'ModalWindow__fullcontent'}>
                
                <p>{mainModalText}</p>
               {
                type === 'login' && 
                <>
                <div className="ModalWindow__logo--content">
                    <div className="ModalWindow__login--content">
                        <img src={logo} alt='logo' />
                        <h1>Faccialibro</h1>
                    </div>
                    <h4>Tu ti iscrivi, noi ci mettiamo la faccia... la tua!</h4>
                </div>
                <div className="ModalWindow__login--line">

                </div>
                </>
               }
                <div className='ModalWindow__Buttons'>
                   { type === 'submit' ? 
                   <>
                   <Button onClick={() => {
                        setCondition(false)
                        setVisibile(false)}} color='lightcoral' textContent='Annulla'/>
                    <Button onClick={() => {
                        setCondition(true);
                        // setVisibile(false)
                        deleteFn();
                    }} color='lightseagreen' textContent='Si'/>
                    </>
                    : type === 'login' && 
                    <>
                    {/* <ImageGallery items={images}/> */}
                    <AddFriend isRenderedList={ isRenderedList } onAddButton={ onAddButton } setIsLoginWindowVisible={setIsLoginWindowVisible} setRenderedList={setRenderedList} />
                    {/* <Button onClick={() => {
                        console.log('login');
                    }} color='white' textContent='Login'/> */}
                    </>
                    }
                    
                </div>
            </div>
        </div>
    )
};

export default ModalWindow;