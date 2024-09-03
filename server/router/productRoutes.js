const express = require("express");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");
const {
  createProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  deleteProductController,
  updateProductController,
  productFilterController,
  productCountController,
  productListController,
  searchProductController,
  relatedProductController,
  productCategoryController,
  braintreeTokenController,
  brainTreePaymentController,
} = require("../controller/productController");
const formidable = require("express-formidable");

const router = express.Router();

// Create Product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// get Product
router.get("/get-product", getProductController);

// get Product by name
router.get("/get-product/:slug", getSingleProductController);

// get Product photo
router.get("/product-photo/:pid", productPhotoController);

// Delete product
router.delete("/delete-product/:pid", deleteProductController);

// Update Product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// product filter
router.post("/product-filters", productFilterController);

// product count
router.get("/product-count", productCountController);

// product list
router.get("/product-list/:page", productListController);

// product search by name
router.get("/search/:keyword", searchProductController);

// related product
router.get("/related-product/:pid/:cid", relatedProductController);

router.get("/product-category/:slug", productCategoryController);

// Payment routes
// token
router.get("/braintree/token", braintreeTokenController);

// payments
router.post('/braintree/payment',requireSignIn,brainTreePaymentController)

module.exports = router;
