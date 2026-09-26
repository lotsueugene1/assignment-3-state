import './ProductCard.css';

function ProductCard({
  productName,
  price,
  image = 'https://placehold.co/600x400',
  description,
}) {

  return (

    <div className="product-card">

      <div className="post-header">
        <img 
          src={image}
          alt={`${productName} product`}
          className="avatar"
        />

        <div className="product-info">
          <h3 className="productName">{productName}</h3>
        <p className="product-description">{description} </p>
          <span className="price">{price}</span>
        </div>

      </div>

    </div>
  );
}


export default ProductCard;
