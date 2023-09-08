const express = require("express");
const router = express.Router();
const contentController = require("../controllers/contentController");
const authenticationMiddleware = require("../middleware/authentication");
const validateRequest = require("../validator/validator");
const contentCreateSchema = require("../schemas/contentSchema");

// Middleware to protect routes
router.use(authenticationMiddleware);

// Create Content
router.post(
  "/",
  validateRequest(contentCreateSchema, "body"),
  contentController.createContent
);

// Get Personalized Content Feed
router.get("/feed", contentController.getPersonalizedFeed);

// Get All Content
router.get("/get", contentController.getAllContent);

// Update Content by ID
router.put("/update/:id", contentController.updateContent);

// Delete Content by ID
router.delete("/delete/:id", contentController.deleteContent);

module.exports = router;
