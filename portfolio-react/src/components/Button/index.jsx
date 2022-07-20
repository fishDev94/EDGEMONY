import './index.css';

function Button({text,indice, action}) {
  return (
    <button onClick={action} id={indice} className="btn">{text}</button>
  );
}

export default Button;