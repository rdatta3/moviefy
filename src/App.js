import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/Navbar';
import BodyContent from './Components/BodyContent';
import {useState} from 'react';



function App() {
   const [searchword,setSearchword]=useState('bond');
  return (

    <div className="App">
    <NavbarComponent setSearchword={setSearchword}/>
    <div className="Heading">
        Movies for every mood!!!!
    </div>
    <div className="Body">
    <BodyContent searchword={searchword}/>
    </div>
    </div>
  );
}

export default App;
