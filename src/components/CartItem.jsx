import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="logo">
          Paradise Nursery
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">🛒 Cart</Link>
        </div>
      </nav>

      <main className="cart-page">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <Link to="/plants" className="continue-button">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-details">
                  <h2>{item.name}</h2>
                  <p>Unit Price: ₹{item.price}</p>
                  <p>
                    Total: ₹{item.price * item.quantity}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="delete-button"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
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

              <Link to="/plants" className="continue-button">
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;