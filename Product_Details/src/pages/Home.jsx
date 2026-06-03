import {Link} from "react-router-dom";

function Home() {

    const products = [
        {
            id : 1,
            name : "iphone",
            price : 999

        },

        {
            id : 2,
            name : "Samsung",
            price : 799
        },

        {
            id : 3,
            name : "MacBook",
            price : 1999
        }

    ];
    return (
        <div>
            <h1>Products</h1>

            {
                products.map((product) => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>${product.price}</p>

                        <Link to={`/product/${product.id}`}>
                            View Details
                        </Link>
                        </div>
                ))
            }
        </div>
    )
}

export default Home;