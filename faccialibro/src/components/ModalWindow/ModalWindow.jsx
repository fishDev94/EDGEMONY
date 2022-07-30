import './index.css';
import Button from '../Button'
import AddFriend from '../AddFriend';
import ImageGallery from 'react-image-gallery';

const ModalWindow = ({mainModalText, setCondition, setVisibile, deleteFn, type,isRenderedList, onAddButton, setIsLoginWindowVisible, setRenderedList, logo, images}) => {

    return (
        <div className="ModalWindow">
            <div className={type === 'submit' ? 'ModalWindow__content' : type === 'login' && 'ModalWindow__fullcontent'}>
                
                <p>{mainModalText}</p>
               {
                type === 'login' && 
                <>
                <div className="ModalWindow__logo--content">
                    <div className="ModalWindow__login--content">
                        <img className="ModalWindow__logo" src={logo} alt='logo' />
                        <h1>Jedibook</h1>
                    </div>
                    <h4>May the force be with you.</h4>
                </div>
                <div className="ModalWindow__login--line">

                </div>
                </>
               }
                <div className='ModalWindow__Buttons'>
                   { type === 'submit' ? 
                   <div className='confirm__buttons'>
                   <Button onClick={() => {
                        setCondition(false)
                        setVisibile(false)}} color='lightcoral' textContent='Annulla'/>
                    <Button onClick={() => {
                        setCondition(true);
                        // setVisibile(false)
                        deleteFn();
                    }} color='#77b2dc' textContent='Si'/>
                    </div>
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