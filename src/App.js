import { Body } from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useState } from "react";
import "./index.css";

function App() {
  const allUsers = ["yax", "sarthak", "dhruvil"];

  const products = [
    {
      id: 1,
      name: "Jordan 1",
      image: "",
      price: 100,
    },
    {
      id: 2,
      name: "Nike air force",
      image: "",
      price: 200,
    },
    {
      id: 3,
      name: "New balance 7090",
      image: "",
      price: 150,
    },
    {
      id: 4,
      name: "Adidas Yeezy",
      image: "",
      price: 170,
    },
  ];

  // state : letters
  const [letters, setLetters] = useState("");

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
        setLetters={setLetters}
        letters={letters}
      />
      <Body
        products={products}
        letters={letters}
        cart={cart}
        setCart={setCart}
        user={user}
      />
      <Footer />
    </div>
  );
}

export default App;
