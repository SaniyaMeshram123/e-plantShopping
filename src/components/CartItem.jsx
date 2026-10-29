
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link, useNavigate } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    navigate("/plants");
  };

  return (
    <div className="cart-container">
      <nav className="navbar">
        <Link to="/" className="logo">
          Paradise Nursery
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            🛒 Cart ({cartItems.reduce(
              (total, item) => total + item.quantity,
              0
            )})
          </Link>
        </div>
      </nav>

      <main className="cart-page">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <button
              className="get-started-button"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-details">
                  <h2>{item.name}</h2>
                  <p>Unit Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>
                    Item Total: ₹{item.price * item.quantity}
                  </p>

                  <div className="quantity-controls">
                    <button onClick={() => handleDecrement(item)}>
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => handleIncrement(item)}>
                      +
                    </button>
                  </div>

                  <button
                    className="delete-button"
                    onClick={() => handleRemove(item)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-summary">
              <h2>Total Amount: ₹{totalAmount}</h2>

              <button
                className="checkout-button"
                onClick={() => alert("Coming Soon")}
              >
                Checkout
              </button>

              <button
                className="get-started-button"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;

