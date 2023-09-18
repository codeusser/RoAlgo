import logo from './logo.svg';
import './App.scss';
import Header from './Header/header';
import Home from './Home/home';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Member from './BecomeMember/member';
import Footer from './footer/footer';
import Anunturi from './Anunturi/anunuri';



function App() {
  return (
    <div className="App">
      <div className='content-wrap'> 
      <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path='/member' element={<Member/>}></Route>
            <Route path='/anunturi' element={<Anunturi/>}></Route>
        </Routes>

      </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
