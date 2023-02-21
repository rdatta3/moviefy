import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/Navbar';
import BodyContent from './Components/BodyContent';
import MovieDetails from './Components/MovieDetail';
import NotFound from './Components/NotFound';
import {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
   const [searchword,setSearchword]=useState('film');
  return (
  <BrowserRouter>
    <div className="App">
    <NavbarComponent setSearchword={setSearchword}/>

    <div className="Body">
        <Routes>
            <Route path="/" element={<BodyContent searchword={searchword}/>}/>
            <Route path="/movies/:id" element={<MovieDetails/>} />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
