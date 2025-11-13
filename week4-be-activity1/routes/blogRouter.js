const express = require("express");
const router = express.Router();

const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController"); 

// GET /api/blogs
router.get("/", getAllBlogs);

// POST /api/blogs
router.post("/", createBlog);

// GET /api/blogs/:blogId
router.get("/:blogId", getBlogById);

// PUT /api/blogs/:blogId
router.put("/:blogId", updateBlog);

// DELETE /api/blogs/:blogId
router.delete("/:blogId", deleteBlog);

module.exports = router;
