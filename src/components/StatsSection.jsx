import Stat from './Stat';
import AddStat from './AddStat';
import { useState } from 'react';

const StatsSection = () => {
  const [stats, setStats] = useState([]);
  
  const handleAddStat = (event) => {
    event.preventDefault();
    const name = event.target.elements.statName.value;
    if(name === '') return;

    setStats(prevStats => [...prevStats, name]);
    event.target.elements.statName.value = '';
  }

  return(
    <div id='stats' className='main-body'>
      {stats.map((name, idx) => (
        <Stat key={idx}>{name}</Stat>
      ))}
      <AddStat onAddStat={handleAddStat} />
    </div>
  );
}

export default StatsSection;