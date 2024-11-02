export function Body({ products, cart, setCart, user, letters }) {
  const stored_cart = JSON.parse(localStorage.getItem(`cart_${user}`))
    ? JSON.parse(localStorage.getItem(`cart_${user}`))
    : [];

  // state : Cart *used
  if (cart.length === 0 && stored_cart.length !== 0) setCart(stored_cart);
  return (
    <div>
      <section className="products">
        {products
          .filter(
            (product) =>
              (product.name.toLowerCase() || null).indexOf(
                letters != null && letters.toLowerCase()
              ) === 0
          )
          .map((product) => (
            <Products
              key={product.id}
              product={product}
              user={user}
              cart={cart}
              setCart={setCart}
            />
          ))}

        {products
          .filter(
            (product) =>
              (product.name.toLowerCase() || null).indexOf(
                letters != null && letters.toLowerCase()
              ) > 0
          )
          .map((product) => (
            <Products
              key={product.id}
              product={product}
              user={user}
              cart={cart}
              setCart={setCart}
            />
          ))}
      </section>
    </div>
  );
}

function Products({ product, user, cart, setCart }) {
  return (
    <div>
      <article className="product">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <p className="price">${product.price}</p>
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
    </div>
  );
}
