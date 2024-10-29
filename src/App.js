import { Body } from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./index.css";
import { useState } from "react";

function App() {
  const users = [{ name: "yax" }, { name: "sarthak" }, { name: "dhruvil" }];
  const products = [
    {
      id: 1,
      name: "Jordan 1",
      image: "",
      price: 10,
    },
    {
      id: 2,
      name: "Nike air force",
      image: "",
      price: 10,
    },
    {
      id: 3,
      name: "New balance 7090",
      image: "",
      price: 10,
    },
    {
      id: 4,
      name: "Adidas Yeezy",
      image: "",
      price: 10,
    },
  ];

  // state : user
  const [user, SetSelectedUser] = useState(0);

  // state : cart
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Header
        users={users}
        products={products}
        user={user}
        SetSelectedUser={SetSelectedUser}
      />
      <Body products={products} cart={cart} setCart={setCart} user={user} />
      <Footer />
    </div>
  );
}

export default App;
