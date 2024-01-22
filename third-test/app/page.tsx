import WarframeCombobox from "@/components/WarframeCombobox";
import Image from "next/image";
import Items from "warframe-items";

export default function Home() {
  const items = new Items({ category: ["Warframes"] });
  const warframes = Array.from(items).filter(
    (item) => item.isPrime !== true && item.productCategory === "Suits"
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {warframes.map((warframe) => (
        <div key={warframe.name} className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">{warframe.name}</h1>
          <Image
            src={warframe.wikiaThumbnail}
            alt="Warframe"
            width={200}
            height={200}
          />
          <div>{warframe.sex}</div>
          <div>Release Year: {warframe.releaseDate.split("-")[0]}</div>
          <div>Health: {warframe.health}</div>
          <div>Shield: {warframe.shield}</div>
          <div>{warframe.marketCost}</div>
        </div>
      ))}
      <WarframeCombobox warframes={warframes} />
    </main>
  );
}
