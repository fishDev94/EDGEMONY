import './index.css';
import Button from '../Button'
import AddFriend from '../AddFriend';

const ModalWindow = ({mainModalText, setCondition, setVisibile, deleteFn, type,isRenderedList, onAddButton, setIsLoginWindowVisible, setRenderedList, logo}) => {

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
                    <h4>Tu ti iscrivi, noi ci mettiamo la faccia, la tua!</h4>
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