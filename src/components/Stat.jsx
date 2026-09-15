import battery from './../assets/images/battery.png';

import StatLevels from './StatLevels.jsx';

import { useState, useRef, useEffect } from 'react';

const Stat = ({ children }) => {
  const [levels, setLevels] = useState([]);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [isButtonVisible])

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = event.target.elements.levelInput.value;
    setIsButtonVisible(true);
    if(text === '') return;

    setLevels(prevLevels => [
      ...prevLevels,
      {
        id: crypto.randomUUID(),
        text: text,
      }
    ]);
    console.log(levels);
    event.target.elements.levelInput.value = '';
  }

  const handleRemoveLevel = () => {
    setLevels(prevLevels => prevLevels.slice(0, -1)); 
  }

  return(
    <div className='stat'>
      <div>
        <h1>{children}</h1>
        <StatLevels levels={levels} />      
        <button 
          className='level-button' 
          onClick={() => setIsButtonVisible(false)}
          style={{ display: (isButtonVisible) ? 'inline' : 'none' }}
        >Add LVL</button>
        <button
          className='level-button'
          onClick={handleRemoveLevel}
          style={{ display: (isButtonVisible) ? 'inline' : 'none' }}
        >Remove LVL</button>
        <form onSubmit={handleSubmit}>
          <input 
            name='levelInput'
            className='level-input'
            type='text'
            style={{display: (!isButtonVisible) ? 'block' : 'none'}}
            ref={inputRef}
          />
        </form>
      </div>
      <div className='stat-score'><div /><div /><div /><div /></div>
    </div>
  );
}

export default Stat;