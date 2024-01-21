import Items from "warframe-items";

export default eventHandler(() => {
  const items = new Items({ category: ["Arcanes"] });
  return { items };
});
