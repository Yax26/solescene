import { useState } from "react";
import Constants from "./Constants.js";

export function Header() {
  console.log(Constants);
  const [user, SetSelectedUser] = useState(0);

  function handleSetSelectedUser(event) {
    console.log(event.target.value);
    SetSelectedUser(event.target.value);
  }

  return (
    <header>
      <div className="logo">LOGO</div>
      <nav>
        <a href="#">Home</a>
        <input type="search" placeholder="Search..." />
      </nav>
      <div className="user-cart">
        {/* <Cart handleSetSelectedUser={handleSetSelectedUser} /> */}
        <SelectUser user={user} handleSetSelectedUser={handleSetSelectedUser} />
      </div>
    </header>
  );
}

function SelectUser({ handleSetSelectedUser, user }) {
  return (
    <div className="user">
      <select
        className="user_dropdown"
        name="current_user"
        value={user}
        onChange={handleSetSelectedUser}
      >
        {Constants.users.map((user, index) => (
          <option key={index} value={index} className="options_color">
            {Constants.users[index].name}
          </option>
        ))}
      </select>
    </div>
  );
}

function Cart() {
  return (
    // <div className="cart" onClick={LoadCart()}>
    //   🛒
    // </div>
    ""
  );
}
