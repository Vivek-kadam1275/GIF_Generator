import logo from './logo.svg';
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="background h-screen w-screen overflow-x-hidden flex flex-col items-center gap-8">

      <h1 className='bg-white text-2xl font-bold w-11/12  text-center rounded-lg py-2   mt-7'>RANDOM GIFS</h1>

      <Random/>
      <Tag/>
      <Toaster/>
      
    </div>
  );
}

export default App;
