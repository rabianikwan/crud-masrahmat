
const BlogModel = require("../models/blog.models");

const blogModel = new BlogModel()


const getBlogs = async (req, res) => {
  const blogs = await blogModel.getAll();
  return res.json({ blogs });
};

const addBlog = async (req, res) => {
  const { title, description, content } = req.body;
  const blogs = await blogModel.create({ title, description, content });
  return res.json({ blogs });
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;
  const blog = await blogModel.delete(id);
  return res.json({ blog });
};

const editBlog = async (req, res) => {
  const { id } = req.params;
  const { title, description, content } = req.body;
  const blog = await blogModel.edit({ id, title, description, content });
  return res.json({ blog });
};

function saveblogAndRedirect(path) {
  return async (req, res) => {
    let blog = req.blog;
    blog.title = req.body.title;
    blog.description = req.body.description;
    blog.markdown = req.body.markdown;
    try {
      blog = await blog.save();
      res.redirect(`/articles/${blog.slug}`);
    } catch (e) {
      res.render(`articles/${path}`, { blog: blog });
    }
  };
}

module.export = {
  getBlogs,
  addBlog,
  deleteBlog,
  editBlog,
};