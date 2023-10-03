import { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

// Title component for display logo
const Title = () => (
  <Link to="/">
    <h1>Logo</h1>
  </Link>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header px-5 ">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>
            <Link to={"/cart"}>
              {" "}
              Cart
              <span> ({cartItems.length} items)</span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
