import PRView from './views/PRView';
import "./app.css";
import prData from "./data/Summer2022.json";
import { Player } from './types/player';

function App() {

  const players = prData as Player[];

  return (
    <div className="App">
      <PRView prData={players} />
    </div>
  );
}

export default App;
