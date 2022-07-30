import './index.css';

const Button = ({textContent, color, type, onClick, style_type="Button"}) => {
  return (
    <button type={ type } onClick={onClick} className={style_type} style={{ backgroundColor: color }}>{ textContent }</button>
  )
}

export default Button;