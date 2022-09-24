import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
// import Footer from './Component/Footer/Footer';
// import Footer from './Component/Footer';
import Navbar from './Component/Navbar/Navbar';
import ExerciseDetail from './Pages/Exercies/ExerciseDetail';
import ExerciesSingle from './Pages/ExerciesSingle/ExerciesSingle';
import React from 'react';
import Exerciescard from './Pages/Exerciescard/Exerciescard';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
    
      <Routes>

        <Route path='/' element={<Navbar  />}/>
        <Route path='/details/:title' element={<ExerciseDetail/>}/>
        <Route path='/Exercies' element={<ExerciesSingle/>}/>
        <Route path='/data/:name' element={<Exerciescard/>}/>

      </Routes>
     
      </BrowserRouter>
      {/* <Footer/> */}
    
    </div>
  );

}

export default App;
