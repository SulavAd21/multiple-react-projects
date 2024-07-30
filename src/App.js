import './App.css';
import Accordion from './components/accordion';
import ImageSlider from './components/image-slider';
import RandomColor from './components/random-color';
import StarRating from './components/start-rating';

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
     {/* <RandomColor /> */}
     {/* <StarRating noOfStars={10}/> */}
     <ImageSlider url={'https://picsum.photos/v2/list'}/>
    </div>
  );
}

export default App;
