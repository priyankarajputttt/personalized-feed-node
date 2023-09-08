const Content = require("../models/content");
const User = require("../models/user");


// Create new content
exports.createContent = async (title,tags, description) => {
  const newContent = new Content({
    title,
    tags,
    description,
  });
  await newContent.save();
  return newContent;
};

// Get personalized feed based on user interests
exports.getPersonalizedFeed = async (userId) => {
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return [];
      }
      const userInterests = user.interests;
      const personalizedFeed = await Content.find({ tags: { $in: userInterests } });
  
      return personalizedFeed;
    } catch (error) {
      throw error;
    }
  };
  

// Get all content
exports.getAllContent = async () => {
  const allContent = await Content.find();
  return allContent;
};

// Update content by ID
exports.updateContent = async (contentId, title, description) => {
  const updatedContent = await Content.findByIdAndUpdate(
    contentId,
    { title, description },
    { new: true }
  );
  return updatedContent;
};

// Delete content by ID
exports.deleteContent = async (contentId) => {
  await Content.findByIdAndDelete(contentId);
};
