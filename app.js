const express = require("express");
const adminRouter = require("./routes/admin");
const postRouter = require("./routes/posts");
require("dotenv").config();

const db = require("./db");

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

db.connectToMongoDB();
app.use(express.urlencoded({ extended: true }));

app.use("/admin", adminRouter);
app.use("/", postRouter);

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(PORT, () => {
  console.log(`Server started on PORT: http://localhost:${PORT}`);
});
