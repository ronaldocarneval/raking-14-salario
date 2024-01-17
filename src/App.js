
import './App.css';
import Header from './components/header';
import History from './components/history';
import Raking from './components/raking';
import Raking2 from './components/raking2';
import Raking3 from './components/raking3';
import Raking4 from './components/raking4';
import Raking5 from './components/raking5';
import Searchbar from './components/searchbar';

function App() {
  return (
    <div className="App">
     <Header />
     <History />
    < Raking 
    img="./foto.png"
    nome='Ronaldo Moura Carneval Junior'
    />
    < Raking2
    img="./foto.png"
    nome='Ronaldo Moura Carneval Junior' />
    < Raking3 
     img="./foto.png"
     nome='Ronaldo Moura Carneval Junior' />
     < Raking4
     img="./foto.png"
     nome='Ronaldo Moura Carneval Junior'/>
     < Raking5
     img="./foto.png"
     nome='Ronaldo Moura Carneval Junior'/>
    </div>
  );
}

export default App;
