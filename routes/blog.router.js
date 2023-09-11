const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controllers.js");

router.get("/api/v1/blogs", blogController.getBlogs);
router.post("/api/v1/blogs/new", blogController.addBlog);
router.delete("/api/v1/blogs/delete/:id", blogController.deleteBlog);
router.put("/api/v1/blogs/edit/:id", blogController.editBlog);

const blogRouter = router;
// export default blogRouter;

module.exports = router;
