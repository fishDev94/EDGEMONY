import './index.css'

const Button = ({onClick, children}) => {

    return (
        <button onClick={onClick} className="btn-primary">{children}</button>
    )
};

export default Button;