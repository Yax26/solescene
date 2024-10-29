import { Body } from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./index.css";

function App() {
  const users = [{ name: "yax" }, { name: "sarthak" }, { name: "dhruvil" }];
  const products = [
    {
      id: 1,
      name: "Jordan 1",
      image: "",
    },
    {
      id: 2,
      name: "Nike air force",
      image: "",
    },
    {
      id: 3,
      name: "New balance 7090",
      image: "",
    },
    {
      id: 4,
      name: "Adidas Yeezy",
      image: "",
    },
  ];

  return (
    <div className="App">
      <Header users={users} products={products} />
      <Body products={products} />
      <Footer />
    </div>
  );
}

export default App;
