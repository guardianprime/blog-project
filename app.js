const express = require("express");
const adminRouter = require("./routes/admin");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use("/admin", adminRouter);

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: http://localhost:${PORT}`);
});
