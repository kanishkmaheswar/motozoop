import { NextRequest, NextResponse } from "next/server";
import { addProduct, readProducts } from "@/app/lib/fs";
import { ApiError, ProductInput } from "@/app/lib/types";

export async function GET() {
  try {
    const products = await readProducts();
    return NextResponse.json(products, { headers: { "Cache-Control": "no-store" } });
  } catch (error: unknown) {
    return NextResponse.json({ error: "Failed to fetch products" } as ApiError, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ProductInput;
    if (!body || !body.name || typeof body.price !== "number") {
      return NextResponse.json({ error: "Invalid product payload" } as ApiError, { status: 400 });
    }
    const created = await addProduct(body);
    return NextResponse.json(created, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json({ error: "Failed to create product" } as ApiError, { status: 500 });
  }
}


