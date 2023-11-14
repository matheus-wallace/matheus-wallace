import './css/index.css';
import Header from './components/Header';
import Bio from './components/Bio';
import Techs from './components/Techs';
import Presentation from './components/Presentation';
function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Techs />
      <Presentation />
    </div>
  );
}

export default App;
