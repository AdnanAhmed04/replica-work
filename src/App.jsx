import './App.css';

// import '@fortawesome/fontawesome-free/css/all.min.css';

// Components
// import Header from './Components/landing/Navbar/Header';

// import Footer from './Components/landing/Footer/Footer';

// import Landing from './Components/landing/Navbar/landing';
// import About_page from './Components/About/About';
// import Journal_page from './Components/Journal/Journal';
// import Login from './Components/landing/Navbar/Login';

import { Routes, Route } from "react-router-dom";

import Header from './Components/landing2/Navbar/Header'
import Footer from './Components/landing2/Footer/Footer'
import Landing from './Components/landing2/Navbar/landing'
import About from './Components/About2/About'
import Journal_page from './Components/Journal2/Journal'
import ProductList from './Components/Shop2/ProductList';
import ProductDetail from './Components/Shop2/ProductDetail';
import Friends from './Components/Friends_of_Sydney/Friends';

function App() {

  return (
    <>
      <Header />
      {/* <Login/> */}
      {/* <Landing /> */}
      {/* <About/> */}
      {/* <Journal_page/> */}
      {/* <Journal_page/> */}
      



      


    <Routes>
      <Route path='/' >
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/shop' element={<ProductList/>}></Route>
        <Route path='/product/:id' element={<ProductDetail/>}></Route>
        <Route path='*' element="<div className='pg404'>no page found</div>"></Route>
      </Route>
      <Route path="/journal" element={<Journal_page />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/friends" element={<Friends />} />

      <Route path='*' element="<div className='pg404'>no page found</div>"></Route>

    </Routes>

    <Footer />



    </>
  );
}

export default App;
