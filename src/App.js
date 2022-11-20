import './App.css';
import About from './sections/About/About';
import Artists from './sections/Artists/Artists';
import Collection from './sections/Collection/Collection';
import Header from './sections/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Collection />
      <Artists />
    </div>
  );
}

export default App;
