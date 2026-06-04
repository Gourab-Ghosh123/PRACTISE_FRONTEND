import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchProduct() {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();   // ✅ await here

      setProduct(data);

      fetchRelatedProducts(data.category);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchRelatedProducts(category) {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      const data = await response.json();   // ✅ await here

      setRelatedProducts(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="details-container">
      <img
        className="details-image"
        src={product.thumbnail}
        alt={product.title}
      />

      <h1>{product.title}</h1>
      <h2>${product.price}</h2>
      <p>{product.description}</p>

      <h2>Related Products</h2>
      <div className="grid">
        {relatedProducts.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <h3>{item.title}</h3>
            <Link to={`/product/${item.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;
