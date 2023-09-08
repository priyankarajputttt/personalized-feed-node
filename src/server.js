const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRouter");
const contentRoutes = require("./routes/contentRouter");
const app = express();
const port = process.env.PORT || 3000;
const authenticateJWT = require("./middleware/authentication");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://pr639490:bRIM4oSJCG3nyzi6@cluster0.kebl4pz.mongodb.net/",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/api/users", userRoutes);
app.use("/api/content", contentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
