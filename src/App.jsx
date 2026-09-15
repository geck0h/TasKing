import './style/main.css';

import NavBar from './components/NavBar.jsx';
import DailiesSection from './components/DailiesSection.jsx';
import StatsSection from './components/StatsSection.jsx';
import ToDoSection from './components/ToDoSection.jsx';

import { Routes, Route } from 'react-router-dom';


function App() {
  return(
    <>
      <NavBar />
      
      <Routes>
        <Route path='/dailies' element={<DailiesSection />} />
        <Route path='/stats' element={<StatsSection />}/>
        <Route path='/todo' element={<ToDoSection />}/>
        <Route path='/bucket' />
      </Routes>
    </>
  );
}

export default App;
