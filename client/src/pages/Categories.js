import React from "react";
import Layout from "../components/Layout/Layout";
import useCategory from "../hooks/useCategory";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container">
        <div className="row">
          {categories?.map((c) => (
            <div className="col-md-6 mt-5 mb-3" key={c._id}>
              <button className="btn btn-outline-primary">
                <Link to={`/category/${c.slug}`} className="btn">
                  {c.name}
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
