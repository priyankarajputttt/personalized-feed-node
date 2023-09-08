const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = "secret-key";

exports.registerUser = async (username, interests, email, password) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    interests,
    email,
    password: hashedPassword,
  });

  await newUser.save();
};

exports.loginUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found.");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Incorrect password.");
  }

  const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "1h" });
  return token;
};
