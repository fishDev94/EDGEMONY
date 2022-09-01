import './index.css';

export default function Navbar({ filmSection, setModalVisibility }) {

    const handleOnClickLink = () => {
        window.scrollTo({
            top: filmSection.current.offsetTop,
            left: 0,
            behavior: "smooth"
          });
          setModalVisibility(false);
    }

    return (
        <div className="NavBar">
            <ul className="NavBar_list">
                <li onClick={handleOnClickLink}>Films</li>
                <li>About us</li>
            </ul>
        </div>
    )
};