
"use client"; 

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("/data/products.json");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: Product[] = await res.json();
        const foundProduct = data.find((p) => p.id === Number(id));

        if (!foundProduct) {
          setError("Product not found");
        } else {
          setProduct(foundProduct);
        }
      } catch (err) {
        setError("Error fetching product data");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="p-4">Loading...</p>;
  }

  if (error) {
    return <p className="p-4 text-red-500">{error}</p>;
  }

  if (!product) {
    return <p className="p-4">Product not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8" style={{ fontFamily: "Outfit" }}>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded shadow mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-xl text-gray-700 mb-2">${product.price}</p>
      <p className="text-gray-600">This is a placeholder description for {product.name}.</p>
    </div>
  );
};

export default ProductDetailPage;
