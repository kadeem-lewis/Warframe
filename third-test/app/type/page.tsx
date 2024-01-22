import WarframeCombobox from "@/components/WarframeCombobox";

async function getWarframes() {
  const res: any = await fetch(
    "https://api.warframestat.us/warframes/?only=sex,name,health,shield,releaseDate,marketCost,isPrime,productCategory,name,wikiaThumbnail"
  );
  return res.json();
}

export default async function Type() {
  const items: any = await getWarframes();
  const warframes = items.filter(
    (item: any) => item.isPrime !== true && item.productCategory === "Suits"
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WarframeCombobox warframes={warframes} />
    </main>
  );
}
