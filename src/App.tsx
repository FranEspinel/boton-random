import Boton from "./components/Boton";
import { getRandomPos } from "./components/Boton";
function App() {
  return (
    <div>
      <Boton color="danger" onClick={() => console.log(getRandomPos())}></Boton>
    </div>
  );
}

export default App;
