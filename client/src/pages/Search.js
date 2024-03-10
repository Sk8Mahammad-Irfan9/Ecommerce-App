
import React, { useState } from "react";
import { useSearch } from "../context/Search";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Prices } from "../components/Prices";
import Layout from "../components/Layout/Layout";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.result.length < 1
              ? "No PRoducts found"
              : `Found ${values.result.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.result.map((p) => (
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
                  <Button variant="contained" color="secondary">
                    More details
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
