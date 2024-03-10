const express = require("express");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");
const {
  createCategoryController,
  updateCategoryController,
  categoryController,
  singleCategoryController,
  deleteCategoryController,
} = require("../controller/categoryController");

const router = express.Router();

// create product category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// update product category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// get product category
router.get("/get-category", categoryController);

// get single category using name
router.get("/single-category/:slug", singleCategoryController);

// Delete category 
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

module.exports = router;
