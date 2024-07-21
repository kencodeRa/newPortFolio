import './App.css';
import About from './components/about'
import Contact from './components/contact'
import Navbar from './components/navbar'

function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar/>
      <About/>
      <Contact/>
    </main>
  );
}

export default App;
