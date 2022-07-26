import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Service from './Components/Services/Service';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Service></Service>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
