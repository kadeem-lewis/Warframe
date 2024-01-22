import WarframeCombobox from "@/components/WarframeCombobox";
import Image from "next/image";

async function getWarframes() {
  const res: any = await fetch(
    "https://api.warframestat.us/warframes/?only=sex,name,health,shield,releaseDate,marketCost"
  );
  return res.json();
}

export default async function Home() {
  const items: any = await getWarframes();
  const warframes = items.filter(
    (item: any) => item.isPrime !== true && item.productCategory === "Suits"
  );
  console.log(warframes);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {warframes.map((warframe: any) => (
        <div key={warframe.name} className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">{warframe.name}</h1>
          <Image
            src={`https://cdn.warframestat.us/img/${warframe.imageName}`}
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
