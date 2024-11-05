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
  // check that product is in the cart on not
  const cartProduct = cart.find(
    (cart_product) => cart_product.name === product.name
  );

  //decrease product quantity when hit - button and if quantity == 0 then remove the product from the cart
  function DecreaseQuantity() {
    const updatedCart = cart
      .map((cart_product) => ({
        ...cart_product,
        quantity:
          cart_product.name === product.name
            ? cart_product.quantity > 0
              ? cart_product.quantity - 1
              : cart_product.quantity
            : cart_product.quantity,
      }))
      .filter((cart_product) => cart_product.quantity > 0);
    localStorage.setItem(`cart_${user}`, JSON.stringify(updatedCart));

    // updating local storage
    localStorage.setItem(`cart_${user}`, JSON.stringify(updatedCart));

    //set cart cart for decreased quantity
    // state : Cart *used
    setCart(updatedCart);
  }

  // increase the product quantity when hit + button
  function IncreaseQuantity() {
    const updatedCart = cart.map((cart_product) => ({
      ...cart_product,
      quantity:
        cart_product.name === product.name
          ? cart_product.quantity + 1
          : cart_product.quantity,
    }));
    localStorage.setItem(`cart_${user}`, JSON.stringify(updatedCart));

    // set cart for increased quantity
    // state : Cart *used
    setCart(updatedCart);
  }

  // Add product to the cart
  function handleAddToCart() {
    const productInCart = cart.find(
      (cart_product) => cart_product.name === product.name
    );

    if (!productInCart) {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      localStorage.setItem(`cart_${user}`, JSON.stringify(updatedCart));

      // state : Cart *used
      setCart(updatedCart);
    }
  }

  return (
    <div>
      <article className="product">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <p className="price">${product.price}</p>

          {cartProduct ? (
            <button onClick={() => DecreaseQuantity()}>-</button>
          ) : (
            ""
          )}

          <button onClick={() => handleAddToCart()}>
            {cartProduct ? `Quantity: ${cartProduct.quantity}` : "Add to Cart"}
          </button>

          {cartProduct ? (
            <button onClick={() => IncreaseQuantity()}>+</button>
          ) : (
            ""
          )}
        </div>
      </article>
    </div>
  );
}
