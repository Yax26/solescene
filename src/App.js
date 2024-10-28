import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <div class="logo">LOGO</div>
      <nav>
        <a href="#">Home</a>
        <input type="search" placeholder="Search..." />
      </nav>
      <div class="user-cart">
        <div class="cart">Cart</div>
        <div class="user">User</div>
      </div>
    </header>
  );
}

function Body() {
  return (
    <main>
      <div class="filters">Filters</div>
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

function Footer() {
  return <footer>Footer content here.</footer>;
}
export default App;
