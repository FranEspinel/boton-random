interface Props {
  color: string;
  posicion?: { top?: number; left?: number };
  onClick: () => void;
}

export const getRandomPos = (): { top: number; left: number } => {
  let top = Math.floor(Math.random() * window.innerHeight);
  let left = Math.floor(Math.random() * window.innerWidth);

  return { top, left };
};

const Boton = ({ color, posicion, onClick }: Props) => {
  const containerStyle: React.CSSProperties = {
    position: "absolute",
    ...(posicion || getRandomPos()),
  };
  return (
    <div style={containerStyle}>
      <button className={"btn btn-outline-" + color} onClick={onClick}>
        posicion
      </button>
    </div>
  );
};

export default Boton;
