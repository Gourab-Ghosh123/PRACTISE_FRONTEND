
function ProductCard ({name , price}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{price}</p>
            <button>Buy Now</button>
        </div>
    );
}

export default ProductCard;