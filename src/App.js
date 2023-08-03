import logo from './logo.svg';
import './App.css';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Home from  "./Componemts/Home";
import Rooms from "./Componemts/Rooms";
import Header from "./Componemts/Header";
import Footer from "./Componemts/Footer"
function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      
<Route path="/" element={<Home/>}/>
<Route path="/rooms" element={<Rooms/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
