const userService = require("../services/userService");

exports.registerUser = async (req, res) => {
  try {
    const { username, email, interests, password } = req.body;
    await userService.registerUser(username, interests, email, password);
    res
      .status(201)
      .json({ success: true, message: "User registration successful." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: `Internal server error : ${error}` });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await userService.loginUser(email, password);
    res.status(200).json({ success: true, message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: `Internal server error : ${error}` });
  }
};
