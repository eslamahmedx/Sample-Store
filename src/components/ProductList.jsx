import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products.api";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";

export default function ProductList() {
  const [selectedId, setSelectedId] = useState(null);

  const {
    data: products,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p className="center">Loading products...</p>;
  if (isError) return <p className="center">Error loading products</p>;

  return (
    <>
      <header className="header">
  <div className="logo-title">
    <FaShoppingBag size={28} color="#126be9" />
    <h1 className="title">Sample Store</h1>
  </div>
  <button onClick={refetch}>
    {isFetching ? "Refreshing..." : "Refetch Products"}
  </button>
</header>

      <div className="container">
        <div className="grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedId(product.id)}
            />
          ))}
        </div>

        {selectedId && <ProductDetails productId={selectedId} />}
      </div>
    </>
  );
}
