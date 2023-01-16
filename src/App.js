
import './App.css';
import Booking from './components/booking/Booking';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Slider from './components/slider/Slider';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Booking />
      <Services />
    </div>
  );
}

export default App;
