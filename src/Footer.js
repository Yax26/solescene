export function Footer() {
  return <footer>Footer content here.</footer>;
}

// function Products({ product, user, cart, setCart }) {
//   function DecreaseQuantity() {
//     const updatedCart = cart.map((cart_product) => ({
//       ...cart_product,
//       quantity:
//         cart_product.name === product.name
//           ? cart_product.quantity > 0
//             ? cart_product.quantity - 1
//             : cart_product.quantity
//           : cart_product.quantity,
//     }));
//     localStorage.setItem(`cart_${user}`, JSON.stringify(updatedCart));
//     return updatedCart;
//   }
//   function IncreaseQuantity() {
//     const updatedCart = cart.map((cart_product) => ({
//       ...cart_product,
//       quantity:
//       cart_product.name === product.name
//       ? cart_product.quantity + 1
//       : cart_product.quantity,
//     }));
//     localStorage.setItem(`cart_${user}`, JSON.stringify(updatedCart));
//     return updatedCart;
//   }
//   return (
//     <div>
//       <article className="product">
//         <div className="product-image">
//           <img src={product.image} alt={product.name} />
//         </div>
//         <div className="product-details">
//           <p className="price">${product.price}</p>
//           <button onClick={() => setCart(() => DecreaseQuantity())}>-</button>
//           {product.quantity}
//           <button
//             onClick={() => {
//               localStorage.setItem(
//                 `cart_${user}`,
//                 JSON.stringify([...cart, product])
//               );

//               // Update the cart state
//               setCart([...cart, product]);
//             }}
//           >
//             Add to Cart
//           </button>
//           <button onClick={() => setCart(() => IncreaseQuantity())}>+</button>
//         </div>
//       </article>
//     </div>
//   );
// }
