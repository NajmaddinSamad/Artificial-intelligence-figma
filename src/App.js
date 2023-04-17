import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './components/reset.css'
import Navbar from './components/Navbar';
import NextGeneration from './components/NextGeneration';
import Partners from './components/Partners';

function App() {
  return (
    <>
   <Navbar/>
   <NextGeneration/>
   <Partners/>
    </>
  )
}

export default App;
