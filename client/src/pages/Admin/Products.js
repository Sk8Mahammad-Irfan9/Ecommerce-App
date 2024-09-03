import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/products/get-product`
      );
      setProducts(data.products);
    } catch (err) {
      console.log(err);
      toast.error("Unable to get all products");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All products list</h1>
          <div className="d-flex">
            {products?.map((p) => (
              <Link
                to={`/dashboard/admin/products/${p.slug}`}
                key={p._id}
                className="product-link"
              >
                <Card sx={{ maxWidth: 345 }} className="m-2">
                  <CardMedia
                    sx={{ height: 140 }}
                    image={`${process.env.REACT_APP_API}/api/products/product-photo/${p._id}`}
                    title={p.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {p.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {p.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
