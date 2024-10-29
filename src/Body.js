export function Body({ products }) {
  return (
    <main>
      <div class="filters">
        <label for="sort-by">Sort by:</label>
        <select id="sort-by">
          <option value="price">Sort by Price</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>

      {/* *********************products **************************/}
      <section class="products">
        <article class="product">
          <div class="product-image">Image</div>
          <div class="product-details">
            <p class="price">Price</p>
            <button>Add to Cart</button>
          </div>
        </article>
        <article class="product">
          <div class="product-image">Image</div>
          <div class="product-details">
            <p class="price">Price</p>
            <button>Add to Cart</button>
          </div>
        </article>
      </section>
      <aside class="coupons">Coupons</aside>
    </main>
  );
}
