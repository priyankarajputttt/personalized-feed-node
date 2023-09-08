const contentService = require("../services/contentService");

// Create Content
exports.createContent = async (req, res) => {
  try {
    const { title,tags, description } = req.body;
    const newContent = await contentService.createContent(title,tags, description);
    res.status(201).json(newContent);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: `Internal server error : ${error}` });
  }
};

// Get Personalized Content Feed
exports.getPersonalizedFeed = async (req, res) => {
  try {
    // Assuming user interests are available in req.user.interests
    const userInterests = req.body.userId;
    console.log(req.body.userId,'ll')
    const personalizedFeed = await contentService.getPersonalizedFeed(
      userInterests
    );
    res.status(200).json(personalizedFeed);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: `Internal server error : ${error}` });
  }
};

// Get All Content
exports.getAllContent = async (req, res) => {
  try {
    const allContent = await contentService.getAllContent();
    res.status(200).json(allContent);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: `Internal server error : ${error}` });
  }
};

// Update Content by ID
exports.updateContent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedContent = await contentService.updateContent(
      id,
      title,
      description
    );
    res.status(200).json(updatedContent);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: `Internal server error : ${error}` });
  }
};

// Delete Content by ID
exports.deleteContent = async (req, res) => {
  try {
    const { id } = req.params;
    await contentService.deleteContent(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: `Internal server error : ${error}` });
  }
};
