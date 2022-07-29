import './index.css';
import Button from '../Button'
import AddFriend from '../AddFriend';
import ImageGallery from 'react-image-gallery';

const ModalWindow = ({mainModalText, setCondition, setVisibile, deleteFn, type,isRenderedList, onAddButton, setIsLoginWindowVisible, setRenderedList, logo}) => {

    const images = [
        {
          
          thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d937cb17998561.5635a605a208c.png',
          thumbnailHeight: '80px',
          thumbnailWidth: '40px',
        },
        {
          
   
          thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/29bd6417998561.5635a605ad357.png',
          thumbnailHeight: '80px',
          thumbnailWidth: '40px',
        },
        {
          
   
          thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/8dd7e817998561.5635a605b5684.png',
          thumbnailHeight: '80px',
          thumbnailWidth: '40px',
        },
        {
            
     
            thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/29dd2a17998561.5635a605bf76c.png',
            thumbnailHeight: '80px',
            thumbnailWidth: '40px',
        },
        {
            
     
            thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/4134a417998561.5635a605c6ed2.png',
            thumbnailHeight: '80px',
            thumbnailWidth: '40px',
        },
        {
            
     
            thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/8f834817998561.5635a605c8d17.png',
            thumbnailHeight: '80px',
            thumbnailWidth: '40px',
        },
        {
            
     
            thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/5508a017998561.5635a605cd904.png',
            thumbnailHeight: '80px',
            thumbnailWidth: '40px',
        },
        {
            
     
            thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/57f58517998561.5635a605d2424.png',
            thumbnailHeight: '80px',
            thumbnailWidth: '40px',
        },
        {
            
     
            thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/4af31517998561.5635a605daa24.png',
            thumbnailHeight: '80px',
            thumbnailWidth: '40px',
        },
        {
            
     
            thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7d244617998561.5635a605e3323.png',
            thumbnailHeight: '80px',
            thumbnailWidth: '40px',
        },
        {
            
     
            thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/e738ae17998561.5635a605e81c7.png',
            thumbnailHeight: '80px',
            thumbnailWidth: '40px',
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
                    <ImageGallery onThumbnailClick={(e) => localStorage.setItem('imgUrl', e.target.src)} items={images} additionalClass='avatars_gallery' showPlayButton={false} showFullscreenButton={false}/>
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