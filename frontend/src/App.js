import './App.css';
import Home from "./pages/Home";
import View from "./pages/View";
import Cadastro from "./pages/Cadastro";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/view/:id" element={<View/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
    </div>
  );
}

export default App;
