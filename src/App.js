import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Site from './Site';
import Accomodation from './Accomodation';
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import Book from './Book';
import AddOn from './AddOn';
import RoomDetails from './RoomDetails';


function App() {
  return (
    <>
    <Header />
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/accomodation" element={<Accomodation/>}></Route>
        <Route path="/site" element={<Site/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/book" element={<Book/>}></Route>
        <Route path="/addon" element={<AddOn/>}></Route>
        <Route path="/roomone" element={<RoomDetails/>}></Route>
      </Routes>
    </div>

    
    <Footer />
    </>
    
  );
}

export default App;
