import './index.css'

const ModalWindow = ({url, visibilit, onClick}) => {
    console.log(url);
    return (
        <>
        { visibilit && (
            <div onClick={onClick} className="ModalWindow">
                <img src={url} alt="" />
            </div>) }
        </>
    )
}


export default ModalWindow;