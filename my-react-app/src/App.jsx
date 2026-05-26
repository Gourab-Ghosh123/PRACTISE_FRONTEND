import ProductCard from "./Components/Productcard";

const products = [
  {
    id : 1,
    name : "iPhone",
    pirce : "$999"
  },
  {
    id : 2,
    name : "Laptop",
    price : "$1200"
  }
]

function App() {
  return (
    <>
      {products.map((product) => (
          <ProductCard 
            key={product.id}
            name={product.name}
            price={product.price}
          />
      ))}
    </>
  );
}

export default App;