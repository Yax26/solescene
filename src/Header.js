export function Header({ allUsers, user, SetSelectedUser, setCart }) {
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
        <input type="search" placeholder="Search..." />
      </nav>
      <div className="user-cart">
        {/* <Cart handleSetSelectedUser={handleSetSelectedUser} /> */}
        <SelectUser
          allUsers={allUsers}
          user={user}
          handleSetSelectedUser={handleSetSelectedUser}
        />
      </div>
    </header>
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

function Cart() {
  return (
    // <div className="cart" onClick={LoadCart()}>
    //   🛒
    // </div>
    ""
  );
}
