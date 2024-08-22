import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { CartContext } from "../ContextAPI/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">
          <Link className="text-black" to="/">
            <img
              src="image/flipkart.svg"
              alt="icon"
              style={{ width: "250px",height: "50px" }}
            />
          </Link>
        </a>

        <ul className="navbar-nav ms-auto mb-lg-0 mx-4 fs-5 ">
          <li className="nav-item ">
            <Link
              className="text-black"
              style={{
                fontWeight: "bold",
              }}
              to="/"
            >
              SHOP
            </Link>
          </li>
        </ul>

        <Link className="text-black" to="/cart">
          <ShoppingCart size={32} style={{ color: "blacK" }} />

          <span
            className="position-absolute  translate-middle badge  text-white rounded-pill "
            style={{ backgroundColor: "black" }}
          >
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
