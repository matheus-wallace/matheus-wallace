import 'css/index.css';
import Header from 'components/menu/Header';
import Bio from 'components/main/Bio';
import Techs from 'components/main/Techs';
import Presentation from 'components/main/Presentation';
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
