import logo from './logo.svg';
import './App.css';
import Taskbar from './components/Taskbar';

import Sidebar from './components/Sidebar';





function App() {
 
  return (
    <div className="con">
      <header >
        <h1>✓ Todo Master</h1>
          <div className='app'>
                <button >Dark</button>
                <button >Light</button>
                <button >Vibrant</button>
            </div>
      </header>
        <Taskbar/>
        {/* <Sidebar/>  */}
    </div>
  );
}

export default App;
