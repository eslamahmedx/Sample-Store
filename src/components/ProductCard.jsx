export default function ProductCard({ product, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
    </div>
  );
}
