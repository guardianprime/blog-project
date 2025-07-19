const express = require("express");

const passport = require("passport");
const EnsureLoggedIn = require("connect-ensure-login");
const session = require("express-session");

const adminRouter = require("./routes/admin");
const adminModel = require("./models/admin");
const postRouter = require("./routes/posts");
require("dotenv").config();

const db = require("./db");

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
  })
);

db.connectToMongoDB();
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(adminModel.createStrategy());

passport.serializeUser(adminModel.serializeUser());
passport.deserializeUser(adminModel.deserializeUser());

app.use("/admin", EnsureLoggedIn.ensureLoggedIn(), adminRouter);
app.use("/", postRouter);

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", (req, res) => {
  const user = req.body;
  adminModel.register(
    new adminModel({ username: req.body.username }),
    req.body.password,
    (err) => {
      if (err) {
        console.error("Error registering user:", err);
        return res.status(500).send("Error registering user");
      } else {
        // User registered successfully
        passport.authenticate("local")(req, res, () => {
          res.redirect("/admin");
        });
      }
    }
  );
});

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/admin");
  }
);

app.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error("Error logging out:", err);
      return res.status(500).send("Error logging out");
    }
    res.redirect("/home");
  });
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: http://localhost:${PORT}`);
});
