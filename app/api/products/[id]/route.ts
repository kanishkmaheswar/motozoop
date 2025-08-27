import { NextRequest, NextResponse } from "next/server";
import { deleteProduct, getProductById, updateProduct } from "@/app/lib/fs";
import { ApiError, ProductInput } from "@/app/lib/types";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const product = await getProductById(params.id);
    if (!product) {
      return NextResponse.json({ error: "Not found" } as ApiError, { status: 404 });
    }
    return NextResponse.json(product);
  } catch (error: unknown) {
    return NextResponse.json({ error: "Failed to fetch product" } as ApiError, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = (await req.json()) as Partial<ProductInput>;
    const updated = await updateProduct(params.id, body);
    if (!updated) {
      return NextResponse.json({ error: "Not found" } as ApiError, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (error: unknown) {
    return NextResponse.json({ error: "Failed to update product" } as ApiError, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const ok = await deleteProduct(params.id);
    if (!ok) {
      return NextResponse.json({ error: "Not found" } as ApiError, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    return NextResponse.json({ error: "Failed to delete product" } as ApiError, { status: 500 });
  }
}


