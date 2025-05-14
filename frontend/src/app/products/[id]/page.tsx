import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import Navbar from "@/components/Navbar";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

// This runs on the server in App Router
async function getProduct(id: string): Promise<Product | null> {
  const filePath = path.join(process.cwd(), "public/data/products.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const products: Product[] = JSON.parse(jsonData);
  return products.find((p) => p.id === Number(id)) || null;
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-4" style={{ fontFamily: "Outfit" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded md:h-auto md:w-full"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold mt-4 md:mt-0">{product.name}</h1>
          <p className="text-lg text-gray-600 mt-2">${product.price}</p>
        </div>
      </div>
    </div>
  );
}
