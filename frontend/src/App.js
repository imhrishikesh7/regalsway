import './App.css';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PaymentSuccess from './components/PaymentSuccess';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SebiCircular from './components/SebiCircular';
function App() {


  return (
      <>

      <Router>
      {/* <Home/> */}
      <Navbar/>
      {/* <About/>
      <Services/>
      <Projects/> */}
      {/* <Pricing/> */}
      {/* <ContactUs/> */}
        <Routes>
          {/* <Route exact path='/' element={<><About/><Services/><Projects/></>}/> */}
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/services' element={<Services/>}/>
          <Route exact path='/sebicircular' element={<SebiCircular/>}/>
          <Route exact path='/pricing' element={<Pricing/>}/>
          <Route exact path='/contactUs' element={<ContactUs/>}/>
          <Route exact path='/paymentsuccess' element={<PaymentSuccess/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
