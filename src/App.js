import './App.css';
import About from './sections/About/About';
import Artists from './sections/Artists/Artists';
import Collection from './sections/Collection/Collection';
import Header from './sections/Header/Header';
import Story from './sections/Story/Story';
import Roadmap from './sections/Roadmap/Roadmap'
import { guitarGirl } from './assets';
import Partners from './sections/Partners/Partners';
import Questions from './sections/Questions/Questions';
import Team from './sections/Team/Team';
import Action from './sections/Action/Action';
import Footer from './sections/Footer/Footer';

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
      <Roadmap />
      <Partners />
      <Questions />
      <Team />
      <Action />
      <Footer />
    </div>
  );
}

export default App;
