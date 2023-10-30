import React from 'react'
import Password from './components/passwordGen/Password';
import Flip from './components/flipGame/Flip';

function App() {
  return (
    <div className="App flex flex-row bg-slate-400">
      <div className='w-[50%]'><Password /></div>
      <div className='w-[50%]'><Flip /></div>
      
    </div>
  );
}

export default App;
