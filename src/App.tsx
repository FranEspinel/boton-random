import { useState } from "react";
import Boton from "./components/Boton";
import { getRandomPos } from "./components/Boton";

function App() {
  const [pos, setPos] = useState(getRandomPos);
  const [cont, setCont] = useState(0);
  const [backgroundColor, setBackgoundColor] = useState("#ffffff");
  const handleButtonClick = () => {
    const newPos = getRandomPos();
    setPos(newPos);
    setCont((prevValue) => prevValue + 1);
    setBackgoundColor(getRandomColor());
    console.log(newPos, cont);
  };
  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const pageStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
    height: "100vh",
  };
  return (
    <div style={pageStyle}>
      <Boton
        texto={cont}
        color="danger"
        posicion={pos}
        onClick={handleButtonClick}
      ></Boton>
    </div>
  );
}

export default App;
