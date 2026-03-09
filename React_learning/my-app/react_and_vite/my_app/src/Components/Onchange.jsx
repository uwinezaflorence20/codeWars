export default function Onchange({
  onChangeColor
}) {
  return (
    <button className="text-black" onClick={e => {
      e.stopPropagation();
      onChangeColor();
    }}>
      Change color
    </button>
  );
}
