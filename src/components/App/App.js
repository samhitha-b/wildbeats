import './App.css';
import Landing from './components/MainPage/Landing';
import ImageSlider from './components/MainPage/ImageSlider';
import { SliderData } from "./components/MainPage/SliderData";


function App() {
  return (
  <div className="App">
    <ImageSlider slides={SliderData}/>
    <Landing/>
    </div>
  );
}

export default App;
