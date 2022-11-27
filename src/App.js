import './App.css';
import About from './sections/About/About';
import Artists from './sections/Artists/Artists';
import Collection from './sections/Collection/Collection';
import Header from './sections/Header/Header';
import Story from './sections/Story/Story';
import { guitarGirl } from './assets';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Collection />
      <Artists />
      <Story />
      <div className="app__banner">
        <img src={guitarGirl} alt="" />
      </div>
    </div>
  );
}

export default App;
