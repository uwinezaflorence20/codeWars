function Fruits() {
  const fruits = [
    { id: 1, name: "Apple", emoji: "🍎" },
    { id: 2, name: "Banana", emoji: "🍌" },
    { id: 3, name: "Cherry", emoji: "🍒" },
  ];
  return (
    <ul>
      {fruits.map((fruit) => (
        // key must be unique and stable — use IDs, not indexes
        <li key={fruit.id}>
          {fruit.emoji} {fruit.name}
        </li>
      ))}
    </ul>
  );
}
export default Fruits;
