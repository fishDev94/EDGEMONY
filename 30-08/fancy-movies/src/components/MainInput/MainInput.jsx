import { useState, useEffect, useRef, memo } from 'react';
import './index.css';

const MainInput = ({onHandleSubmit, filmSection}) => {
  const inputRef = useRef(null);
  const mainInput = useRef(null);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    inputRef.current.focus()
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
    if (window.scrollY >= filmSection.current.offsetTop - 100) { 
     mainInput.current.style.display = "flex";
    } else {
      mainInput.current.style.display = "none";
    }
    })
  }, [filmSection])

  return (
    <div ref={mainInput} className={`MainInput ${isActive && 'active'}`} >
      <select ref={inputRef} onChange={onHandleSubmit} type="text" >
        <option value="324668">Jason Bourne</option>
        <option value="1271" >300</option>
        <option value="597" >Titanic</option>
        <option value="27205" >Inception</option>
        <option value="157336">Interstellar</option>
        <option value="361743">Top Gun: Maverick</option>
      </select>
      <button onClick={() => setActive(!isActive)}>{isActive ? 'X' : 'Select'}</button>
    </div>
  )
}

export default memo(MainInput);