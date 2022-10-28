import "./CheckoutProduct.css";

function CheckoutProduct({ image, title, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="product__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, x) => (
              <p>⭐</p>
            ))}
        </div>
        <button className="checkoutProduct__button">Remove from basket</button>
      </div>
    </div>
  );
}
export default CheckoutProduct;
