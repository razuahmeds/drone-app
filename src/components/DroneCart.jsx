import "../styles/DroneCart.css";

function DroneCart() {
  return (
    <div className="DroneCart-container">
      <div className="DroneCart">
        <div>
          <h1>Cart</h1>
        </div>
        <div className="Continue-shopping">
          <p>
            “HURC R16 Mini Toy Drone with 4K Profesional Camera HD FPV” has been
            added to your cart.
          </p>
          <p>Continue shopping</p>
        </div>
        <div className="Product">
          <h6>Product</h6>
          <div className="Price-Quantity">
            <h6>Price</h6>
            <h6>Quantity</h6>
          </div>
          <h6>Subtotal</h6>
        </div>

        <button className="Updata-btn">Updata cart</button>

        <div className="Cart-totals">
          <h2 className="totals-cart">Cart totals</h2>
          <p className="Subtotal">Subtotal</p>
          <p className="Shipping">Shipping</p>
          <p>Total</p>
          <button className="proceed-btn">proceed checkout</button>
        </div>
      </div>
    </div>
  );
}

export default DroneCart;
