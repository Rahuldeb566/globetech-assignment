import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Service from './Components/Services/Service';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/Login/Login';


function App() {
  return (
    <div className='App'>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Service></Service>} />
          <Route path="/Login" element={<Login></Login>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
