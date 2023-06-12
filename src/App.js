
// import './App.css';
import { BrowserRouter, Navigate} from 'react-router-dom';
import {Routes, Route} from "react-router";
import Tuiter from './tuiter';
import Labs from './labs';




function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes> 
          <Route path="/"         element={<Navigate to="/labs/a3"/>}/> 
          <Route path="/labs/*" element={<Labs/>}/>    
          <Route path="/tuiter/*" element={<Tuiter/>}/>
        </Routes>
        
      </div>
      
    </BrowserRouter>
  );
}

export default App;
