import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CategoryProduct = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //   const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const params = useParams();
  const getProductByCat = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/products/product-category/${params.slug}`
      );
      setProducts(data?.product);
      setCategory(data?.category);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (params?.slug) getProductByCat();
  }, [params?.slug]);

  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/products/product-count`
      );
      setTotal(data?.total);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/products/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <Layout>
      <div className="container">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result found</h6>
        <div className="row">
          <div className="col-md-9">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
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
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More details
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </div>
            <div className="m-2 p-3">
              {products && products.length < total && (
                <button
                  className="btn btn-warning"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {loading ? "Loading..." : "Load more"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
