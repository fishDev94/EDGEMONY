import './index.css';
import Button from '../Button';

let text = 'Il tuo nome';

const scrivi = () => {
  alert('Stai cliccando Knowledge');
console.log(text)
};

const Scrivi2 = (e) => {
  text = `${document.getElementById('name').value}`;
  e.preventDefault();
  document.getElementById('test').innerHTML = text;
  document.getElementById('name').value = '';
};

function MainSection() {

  return (
    <div className="hero">
      <div className="MainSection">
        <p className="myname">Hi! my name is</p>
          <h1 className="TitleName">Marco Guglielmino</h1>
          <h2 className="TitleCit">I build things for the web.</h2>
          <p className="content">Front-end Developer Computer enthusiast since childhood. I have various experience in the tech field, such as photo editing and sound design. Currently I am improving my javascript, specifically the reactJS framework at <span className="linkdesc">Edgemony</span>, to grow my knowledge and enhance my creativity.</p>
      </div>
      <Button action={scrivi} id="knowledge" text="Checkout my knowledge"/>
      <form className="form-test">
      <input id="name" placeholder='Scrivi il tuo nome'></input>
      <Button action={Scrivi2} id="Cisitu" text="Tu chi sei?"/>
      </form>
      
      <h2 id="test">{text}</h2>
      
    </div>
  );
}

export default MainSection;