import Home from "./pages/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import './App.css';
import Recipe from "./pages/Recipe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route path = '/' element ={<Home/>}/>
            <Route path='/recipe/:id' element={<Recipe/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
