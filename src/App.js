import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/NaviBar';
import 'animate.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './pages/home';
import { Request } from './pages/request';

function App() {
  return (

    <>
    <div className='body'>
      <Router>
        <Navibar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path='/request' element={<Request/>}></Route>
        </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
