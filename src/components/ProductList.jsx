

import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    category: "Succulents",
    price: 299,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Jade Plant",
    category: "Succulents",
    price: 349,
    image: "https://images.unsplash.com/photo-1597055181300-d1c36ba5a5f3?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Echeveria",
    category: "Succulents",
    price: 249,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Haworthia",
    category: "Succulents",
    price: 399,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "String of Pearls",
    category: "Succulents",
    price: 449,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Zebra Haworthia",
    category: "Succulents",
    price: 299,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2f1c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    name: "Monstera",
    category: "Tropical Plants",
    price: 699,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Calathea",
    category: "Tropical Plants",
    price: 599,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Bird of Paradise",
    category: "Tropical Plants",
    price: 899,
    image: "https://images.unsplash.com/photo-1616694930203-8c1f7a4e3a4b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "Peace Lily",
    category: "Tropical Plants",
    price: 499,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    name: "Philodendron",
    category: "Tropical Plants",
    price: 649,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "Alocasia",
    category: "Tropical Plants",
    price: 749,
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 13,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 499,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2f1c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    name: "Spider Plant",
    category: "Indoor Plants",
    price: 299,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 549,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 16,
    name: "ZZ Plant",
    category: "Indoor Plants",
    price: 599,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    name: "Boston Fern",
    category: "Indoor Plants",
    price: 399,
    image: "https://images.unsplash.com/photo-1597055181300-d1c36ba5a5f3?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "Lucky Bamboo",
    category: "Indoor Plants",
    price: 249,
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="logo">
          Paradise Nursery
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">🛒 Cart ({cartCount})</Link>
        </div>
      </nav>

      <main className="products-page">
        <h1>Our Plants</h1>

        {categories.map((category) => (
          <section key={category} className="category-section">
            <h2>{category}</h2>

            <div className="product-list">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => {
                  const alreadyAdded = cartItems.some(
                    (item) => item.id === plant.id
                  );

                  return (
                    <div className="product-card" key={plant.id}>
                      <img src={plant.image} alt={plant.name} />
                      <h3>{plant.name}</h3>
                      <p>₹{plant.price}</p>

                      <button
                        disabled={alreadyAdded}
                        onClick={() => dispatch(addItem(plant))}
                      >
                        {alreadyAdded ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
