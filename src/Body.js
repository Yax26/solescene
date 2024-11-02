export function Body({ products, cart, setCart, user }) {
  const stored_cart = JSON.parse(localStorage.getItem(`cart_${user}`))
    ? JSON.parse(localStorage.getItem(`cart_${user}`))
    : [];

  // state : Cart *used
  if (cart.length === 0 && stored_cart.length !== 0) setCart(stored_cart);
  return (
    <main>
      <div className="filters">
        <label for="sort-by">Sort by:</label>
        <select id="sort-by">
          <option value="price">Sort by Price</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>

      {/* *********************products**************************/}
      <Products products={products} cart={cart} setCart={setCart} user={user} />
      <aside className="coupons">Coupons</aside>
    </main>
  );
}

function Products({ products, cart, setCart, user }) {
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <article className="product">
            <div className="product-image">{product.image}</div>

            <div className="product-details">
              <span>{product.name}</span>
              <p className="price">{product.price}$</p>

              <button
                onClick={() => {
                  localStorage.setItem(
                    `cart_${user}`,
                    JSON.stringify([...cart, product])
                  );

                  // state : Cart *used

                  setCart([...cart, product]);
                }}
              >
                Add to Cart
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
}
