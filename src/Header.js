import { useState } from "react";
import Constants from "./Constants.js";
import { Body } from "./Body";
import { Footer } from "./Footer";
import "./index.css";

export function Header({
  setLetters,
  letters,
  allUsers,
  user,
  SetSelectedUser,
  setCart,
}) {
  const handleSetSelectedUser = (event) => {
    const newUser = event.target.value;

    // state : User *used
    SetSelectedUser(newUser);

    const stored_cart = JSON.parse(localStorage.getItem(`cart_${newUser}`))
      ? JSON.parse(localStorage.getItem(`cart_${newUser}`))
      : [];

    // state : Cart *used
    setCart(stored_cart);
  };

  return (
    <header>
      <div className="logo">LOGO</div>
      <nav>
        <a href="#">Home</a>
        <Search setLetters={setLetters} letters={letters} />
      </nav>
      <div className="user-cart">
        <SelectUser
          allUsers={allUsers}
          user={user}
          handleSetSelectedUser={handleSetSelectedUser}
        />
      </div>
    </header>
  );
}

function Search({ setLetters, letters }) {
  return (
    <input
      type="search"
      placeholder="Search..."
      value={letters || ""}
      onChange={(e) => {
        // state : letter
        setLetters(e.target.value);
        console.log(e.target.value);
      }}
    />
  );
}

function SelectUser({ allUsers, handleSetSelectedUser, user }) {
  return (
    <div className="user">
      <select
        className="user_dropdown"
        value={user}
        onChange={handleSetSelectedUser}
      >
        {allUsers.map((current_user) => (
          <option
            key={current_user}
            value={current_user}
            className="options_color"
          >
            {current_user}
          </option>
        ))}
      </select>
    </div>
  );
}
