import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../api/products.api";

export default function ProductDetails({ productId }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProductById(productId),
    enabled: !!productId,
  });

  if (isLoading) return <div className="details">Loading details...</div>;
  if (isError) return <div className="details">Error loading details</div>;

  return (
    <div className="details">
      <h2>{data.title}</h2>
      <img src={data.image} alt={data.title} />
      <p>{data.description}</p>
      <strong>${data.price}</strong>
    </div>
  );
}
