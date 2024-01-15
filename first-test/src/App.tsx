import Items from "warframe-items";

function App() {
  const items = new Items({ category: ["All"] });
  console.log(items);
  return (
    <>
      <h1>Warframe Items</h1>
      <ul>
        {items.slice(0, 6).map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
