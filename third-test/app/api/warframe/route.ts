import { NextResponse, type NextRequest } from "next/server";
import Items from "warframe-items";

export async function GET(_req: Request) {
  const items = new Items({ category: ["Warframes"] });
  Response.json(items);
}
