import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { BiLogoGmail } from "react-icons/bi";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/auth/login`,
        { email, password }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        toast.success("Successfully Login");
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Email or Password is wrong!");
    }
  };
  return (
    <Layout title={"Login - Ecommerce page"}>
      <div className="register">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div className="from">
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <BiLogoGmail />
                </InputAdornment>
              }
              placeholder="Enter Email"
              margin="dense"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
            />

            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              margin="dense"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="buttons">
              <Button
                variant="outlined"
                type="button"
                onClick={() => {
                  navigate("/forgot-password");
                }}
              >
                Forgot Password
              </Button>
              <Button variant="outlined" type="submit">
                LOGIN
              </Button>
            </div>

            <p>
              Don't have an account?
              <a
                href="/register"
                style={{
                  textDecoration: "none",
                }}
              >
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
