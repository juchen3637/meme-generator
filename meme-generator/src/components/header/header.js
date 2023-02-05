import './header.css'

function Header() {
  return (
    <header className='header'>
      <div className='leftUnits'>
        <img src={require('../../images/Troll Face.png')} alt="Troll face" className='trollPic'></img>
        <h1 className='textLeft'>Meme Generator</h1>
      </div>
      <h1 className='textRight'>React Course - Project 3</h1>
    </header>
  );
}

export default Header;