import { useEffect , useState } from "react";

import { Link } from "react-router-dom";

function Home() {
    const [products , setProducts] = useState([]);

    const [loading , setLoading] = useState(true);

    async function fetchProducts() {
        try {
            const response = await fetch("https://dummyjson.com/products");

            const data =  await response.json();

            setProducts(data.products);
        }
        catch(error){
            console.log(error)
        }

        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    } , []);

    if(loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="container">

            <h1 className="title">Product Store</h1>

            <div className="grid">

                {
                    products.map((product) => (

                        <div className="card" key={product.id}>

                            <img src={product.thumbnail} alt={product.title} />

                            <h2>{product.title}</h2>

                            <p>${product.price}</p>

                            <Link to={`/product/${product.id}`}>View Details</Link>

                        </div>
                    ))
                }

            </div>

        </div>
        
    )
}

export default Home;