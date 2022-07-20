import './index.css';
import Button from '../Button';
import { useState } from 'react';


function MainSection() {

  let [value, setValue] = useState('il tuo nome');
  const Scrivi2 = (e) => {
    e.preventDefault();
    return setValue(document.getElementById('name').value);
  };


  return (
    <div className="hero">
      <div className="MainSection">
        <p className="myname">Hi! my name is</p>
          <h1 className="TitleName">Marco Guglielmino</h1>
          <h2 className="TitleCit">I build things for the web.</h2>
          <p className="content">Front-end Developer Computer enthusiast since childhood. I have various experience in the tech field, such as photo editing and sound design. Currently I am improving my javascript, specifically the reactJS framework at <span className="linkdesc">Edgemony</span>, to grow my knowledge and enhance my creativity.</p>
      </div>
      <Button action={Scrivi2} indice="knowledge" text="Checkout my knowledge"/>
      <form className="form-test">
      <input id="name" placeholder='Scrivi il tuo nome'></input>
      <Button action={Scrivi2} indice="Cisitu" text="Tu chi sei?"/>
      </form>
      
      <h2 id="test">{value}</h2>
      
    </div>
  );
}

export default MainSection;