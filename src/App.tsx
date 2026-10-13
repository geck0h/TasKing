import { Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <SideBar />

      <Routes>
        <Route path='/home' element={<HomePage />}> </Route>
      </Routes>
    </>
  )
}

export default App;
