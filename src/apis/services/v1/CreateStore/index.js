const Store = require('@root/src/apis/models/store'); // Adjust the path as needed

// Create a new blog post
const createStore = async (data) => {
  try {
    const newStore = new Store(data);
    return await newStore.save();
  } catch (error) {
    throw error;
  }
};

// Retrieve all blog posts
const getAllStores = async () => {
  try {
    // return await Blog.find();
    return await Store.find({}).sort({ updatedAt: -1 });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createStore,
  getAllStores,
};
