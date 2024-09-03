import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchInput from "../Form/SearchInput";

import {
  MinusOutlined,
  PlusOutlined,
  QuestionOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Switch, Space } from "antd";

const Header = () => {
  const [auth, serAuth] = useAuth();
  const [cart] = useCart();

  const categories = useCategory();

  const [userState, setUserState] = useState("");
  const handleChange = (e) => {
    setUserState(e.target.value);
  };

  const handleLogout = () => {
    serAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            🛒E-commerce{" "}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput />
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Category
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={`/categories`}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li key={c._id}>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      value={userState}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>{auth?.user?.name}</em>
                      </MenuItem>
                      <MenuItem value={10}>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          style={{
                            textDecoration: "none",
                          }}
                        >
                          Dashboard
                        </NavLink>
                      </MenuItem>
                      <MenuItem value={20}>
                        <NavLink
                          to="/login"
                          onClick={handleLogout}
                          style={{ color: "red", textDecoration: "none" }}
                        >
                          Log Out
                        </NavLink>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </>
              )}

              <li className="nav-item cart">
                <Badge count={cart?.length}>
                  <NavLink to="/cart" className="nav-link">
                    CART
                  </NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
