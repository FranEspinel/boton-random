interface Props {
  texto: number;
  color: string;
  posicion?: { top?: number; left?: number };
  onClick: () => void;
}

export const getRandomPos = (): { top: number; left: number } => {
  let top = Math.floor(Math.random() * window.innerHeight);
  let left = Math.floor(Math.random() * window.innerWidth);
  if (top > window.innerHeight - 300) {
    top -= 150;
  }
  if (left > window.innerWidth - 300) {
    left -= 150;
  }
  return { top, left };
};

const Boton = ({ texto, color, posicion, onClick }: Props) => {
  const containerStyle: React.CSSProperties = {
    position: "absolute",
    ...(posicion || getRandomPos()),
  };
  const handleButtonClick = () => {
    onClick();
  };

  return (
    <div style={containerStyle}>
      <button className={"btn btn-" + color} onClick={handleButtonClick}>
        {texto}
      </button>
    </div>
  );
};

export default Boton;
