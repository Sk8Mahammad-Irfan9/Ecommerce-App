import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";
import axios from "axios";
import { Button, Input, InputAdornment, TextField } from "@mui/material";
import { HiLocationMarker } from "react-icons/hi";
import { BiLogoGmail } from "react-icons/bi";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Profile = () => {
  const [auth, setAuth] = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const { name, email, phone, address } = auth?.user;
    setName(name);
    setAddress(address);
    setEmail(email);
    setPhone(phone);
  }, [auth?.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/auth/profile`,
        { name, email, password, phone, address }
      );

      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile updated successfully");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <Layout title={"Dashboard - Your Profile"}>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>Your Profile</h1>
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
                  type="email"
                  disabled
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
                  type="address"
                />

                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  margin="dense"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                />
                <Button variant="outlined" type="submit">
                  update
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
