import logo from './logo.svg';
import './App.css';
import Header from './Components/Pages/Header/Header';
import Sidebar from './Components/Pages/Sidebar/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/form';
import Update from './Components/Form/Update';
import Community from './Components/Community/Community';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element = {<Dashboard/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form" element={<Form/>} />
          <Route path="/community" element={<Community/>} />
          <Route path = "/updateform" element = {<Update/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
