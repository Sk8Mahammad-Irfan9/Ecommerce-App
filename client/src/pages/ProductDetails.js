import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/products/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/products/related-product/${pid}/${cid}`
      );
      setRelatedProduct(data?.products);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <div className="row container">
        <div className="col-md-6">
          <img
            src={`${process.env.REACT_APP_API}/api/products/product-photo/${product._id}`}
            alt={product.name}
            // height="300"
            width={"350px"}
          />
        </div>
        <div className="col-md-6">
          <h1>Product Details</h1>
          <h6>Name: {product.name}</h6>
          <h6>Description: {product.description}</h6>
          <h6>Category: {product?.category?.name}</h6>
          <h6>Price:$ {product.price}</h6>
          <button className="btn btn-secondary ms-1">Add to cart</button>
        </div>
      </div>
      <hr />
      <div className="row container">
        <h6>Similar Products</h6>
        {relatedProduct.length < 1 && (
          <b className="text-center">No Similar Products found</b>
        )}
        <div className="d-flex flex-wrap">
          {relatedProduct?.map((p) => (
            <Card sx={{ maxWidth: 345 }} className="m-2" key={p._id}>
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
                  {p.description.substring(0, 30)}...
                </Typography>
                <b variant="body2" color="text.secondary">
                  ${p.price}
                </b>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="success">
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
