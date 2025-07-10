const express = require("express");
const adminRouter = require("./routes/admin");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use("/admin", adminRouter);
app.get("/", (req, res) => {
  res.send("WELCOME TO THE MAIN PAGE");
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: http://localhost:${PORT}`);
});
