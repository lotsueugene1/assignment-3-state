import './ProductCard.css';

function ProductCard({
  name,
  price,
  image = 'https://placehold.co/600x400',
  description,
}) {

  return (

    <div className="product-card">

      <div className="post-header">
        <img 
          src={image}
          alt={`${name} product`}
          className="avatar"
        />

        <div className="product-info">
          <h3 className="productName">{name}</h3>
        <p className="product-description">{description} </p>
          <span className="price">{price}</span>
        </div>

      </div>

    </div>
  );
}


export default ProductCard;
