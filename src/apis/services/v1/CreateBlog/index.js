const Blog = require('@root/src/apis/models/blog'); // Adjust the path as needed

// Create a new blog post
const createBlog = async (data) => {
  try {
    const newBlog = new Blog(data);
    return await newBlog.save();
  } catch (error) {
    throw error;
  }
};

// Retrieve all blog posts
const getAllBlogs = async () => {
  try {
    // return await Blog.find();
    return await Blog.find({}).sort({ updatedAt: -1 });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
};
