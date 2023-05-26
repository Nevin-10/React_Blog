
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Table1 from './components/Table1';
import Add from './components/Add';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Table1 />} />
        <Route path='/Add' element={<Add />} />
      </Routes>
   
    </div>
  );
}


export default App;
