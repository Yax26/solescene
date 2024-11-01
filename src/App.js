import { Body } from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./index.css";
import { useState } from "react";

function App() {
  const allUsers = ["yax", "sarthak", "dhruvil"];

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
  const [user, SetSelectedUser] = useState("yax");

  // state : cart
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Header
        allUsers={allUsers}
        user={user}
        SetSelectedUser={SetSelectedUser}
        setCart={setCart}
      />
      <Body products={products} cart={cart} setCart={setCart} user={user} />
      <Footer />
    </div>
  );
}

export default App;
