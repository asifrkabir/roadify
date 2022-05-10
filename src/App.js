import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';

function App() {

  return (
    <div>

      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
