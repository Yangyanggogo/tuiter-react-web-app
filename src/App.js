
import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Tuiter from './tuiter';
import Labs from './labs';

import HelloWorld from './labs/a3/hello';
import JavaScript from './labs/a3/java-script';


function App() {
  return (
    
    <div className='container'>
      
      <Labs/>
      <HelloWorld/>
      <Tuiter/>
      <JavaScript/>
      

    </div>
    
  );
}

export default App;
