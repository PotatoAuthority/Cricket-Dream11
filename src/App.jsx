import { Suspense, useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar'
import Players from './Components/Player/Players';
  import { ToastContainer, toast } from 'react-toastify';

const fetchPlayer = async() => {
  const res = await fetch('/data.json');
  return res.json();
}

function App() {
  const playersPromise = fetchPlayer();
  const [coin, setCoin] = useState(50000000);
  return (
    <div className='w-70% max-w-[90%] md:max-w-[1200px] mx-auto mb-5'>
      <Navbar coin={coin}></Navbar>
      {/* <p className="text-7xl">I am Hemel</p> */}
      <Suspense fallback={
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      }>
        <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin}></Players>
      </Suspense>
      
      {/* toaster */}
      <ToastContainer />
    </div>


  )
}

export default App
