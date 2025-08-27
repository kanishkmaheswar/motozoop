import { promises as fs } from "fs";
import path from "path";
import { Product, ProductInput } from "./types";

const dataDir = path.join(process.cwd(), "app", "lib", "data");
const productsFile = path.join(dataDir, "products.json");

async function ensureDataDir(): Promise<void> {
  await fs.mkdir(dataDir, { recursive: true });
}

export async function readProducts(): Promise<Product[]> {
  await ensureDataDir();
  try {
    const content = await fs.readFile(productsFile, "utf-8");
    return JSON.parse(content) as Product[];
  } catch (err: unknown) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      await fs.writeFile(productsFile, "[]", "utf-8");
      return [];
    }
    throw err;
  }
}

export async function writeProducts(products: Product[]): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(productsFile, JSON.stringify(products, null, 2), "utf-8");
}

export async function addProduct(input: ProductInput): Promise<Product> {
  const products = await readProducts();
  const product: Product = { id: `p-${Date.now()}`, ...input };
  products.push(product);
  await writeProducts(products);
  return product;
}

export async function updateProduct(
  id: string,
  input: Partial<ProductInput>
): Promise<Product | null> {
  const products = await readProducts();
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null;
  const updated: Product = { ...products[index], ...input } as Product;
  products[index] = updated;
  await writeProducts(products);
  return updated;
}

export async function deleteProduct(id: string): Promise<boolean> {
  const products = await readProducts();
  const next = products.filter((p) => p.id !== id);
  const changed = next.length !== products.length;
  if (changed) {
    await writeProducts(next);
  }
  return changed;
}

export async function getProductById(id: string): Promise<Product | null> {
  const products = await readProducts();
  return products.find((p) => p.id === id) ?? null;
}


