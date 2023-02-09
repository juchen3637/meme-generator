import './text.css';

function Text() {
  return (
    <div className='userInputs'>
      <div className='enterText'>
        <input type="text" className='inputText' placeholder='Top text'></input>
        <input type="text" className='inputText' placeholder='Bottom text'></input>
        <button className='generateButton'>Get a new meme image 🖼</button>
      </div>
    </div>
  );
}

export default Text;