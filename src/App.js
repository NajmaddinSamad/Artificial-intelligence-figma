import './components/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Services from './pages/Services';
import NotFound  from './pages/NotFound';
import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
  
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;
