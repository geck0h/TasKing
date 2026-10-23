import { Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import HomePage from './components/HomePage';
import TasksPage from './components/TasksPage';

function App() {
  return (
    <>
      <SideBar />

      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/tasks' element={<TasksPage />} />
      </Routes>
    </>
  )
};

export default App;
