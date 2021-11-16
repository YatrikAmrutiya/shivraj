import './App.css';
import Bar from './components/Bar';
import Consumer from './components/Consumer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="" >
        <Bar />
      </div>
      <div className="">
        <Navbar />
        {/* demo param */}
        <Consumer MedicineName="Paracetamol" />
      </div>

    </div>
  );
}

export default App;
