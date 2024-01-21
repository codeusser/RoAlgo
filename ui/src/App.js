import logo from './logo.svg';
import './App.scss';
import Header from './Header/header';
import Home from './Home/home';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Member from './BecomeMember/member';
import Footer from './footer/footer';
import Anunturi from './Anunturi/anunuri';
import Post from './Post/post';
import ArticleEditor from './ArticleEditor/articleEditor';
import Articole from './Articole/articole';
import Login from './Login/login';

function App() {
  return (
    <div className="App">
      <div className='content-wrap'> 
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path='/member' element={<Member/>}></Route>
            <Route path='/anunturi' element={<Anunturi/>}></Route>
            <Route path="/post" element={<Post/>}></Route>
            <Route path='/article' element={<Articole/>}></Route> 
            <Route path="/roalgoeditor" element={<ArticleEditor/>}></Route>
        </Routes>

      </BrowserRouter>
      </div>
    
    </div>
  );
}

export default App;
