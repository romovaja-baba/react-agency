import "./Product.css";

const Product = (props) => {

    const product = props.product;

    return (
        <div className={`productArea ${props.isActive ? "active" : "inactive"}`} onClick={() => {props.markActive(product.id)}} style={{  
            backgroundImage: `url(${product.image})`}}>
            <div className="productTag">{product.tag}</div>
            <div className="productName">{product.name}</div>
        </div>
    )
};

export default Product;