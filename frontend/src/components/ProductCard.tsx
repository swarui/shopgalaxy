"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

function ProductCard() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/data/products.json");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ fontFamily: "Outfit" }} className="w-full max-w-6xl mx-auto px-4">
      <h1 className="text-2xl text-black mb-6">Products</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="border p-4 rounded shadow hover:shadow-lg transition block"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <div className="" >
            <h2 className="text-base  font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p></div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
