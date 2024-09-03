import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { BiLogoGmail } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/auth/register`,
        { name, email, password, phone, address, answer }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        toast.error("User already exists. Please try logging in.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
      console.error(err);
    }
  };

  return (
    <Layout title={"Register - Ecommerce page"}>
      <div className="register">
        <h1>REGISTER</h1>
        <form onSubmit={handleSubmit}>
          <div className="from">
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
              placeholder="Enter Name"
              margin="dense"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
            />

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

            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <HiLocationMarker />
                </InputAdornment>
              }
              placeholder="Enter address"
              margin="dense"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              type="address"
            />

            <Input
              sx={{ width: "100%" }}
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start"></InputAdornment>
              }
              placeholder="Enter secret key"
              margin="dense"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
              type="text"
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

            <TextField
              id="outlined-phone"
              label="phone"
              type="tel"
              InputLabelProps={{
                shrink: true,
              }}
              margin="dense"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <Button variant="outlined" type="submit">
              REGISTER
            </Button>
            <p>
              Already register?
              <a
                href="/login"
                style={{
                  textDecoration: "none",
                }}
              >
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
