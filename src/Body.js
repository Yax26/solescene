export function Body({ products, cart, setCart }) {
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
      <Products products={products} cart={cart} setCart={setCart} />
      <aside className="coupons">Coupons</aside>
    </main>
  );
}

function Products({ products, cart, setCart }) {
  return (
    <section class="products">
      {products.map((product) => {
        return (
          <article className="product">
            <div className="product-image">{product.image}</div>
            <div className="product-details">
              <span>{product.name}</span>
              <p className="price">{product.price}$</p>
              <button
                onClick={() => {
                  setCart([...cart, product]);
                }}
              >
                {console.log(cart, "hello")}
                Add to Cart
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
}
