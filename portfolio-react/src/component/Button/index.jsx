import './index.css';

function Button({text,id, action}) {
  return (
    <button onClick={action} id={id} className="btn">{text}</button>
  );
}

export default Button;