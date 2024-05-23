import express from "express";
const router = express.Router();

// Middleware to parse form data
router.use(express.urlencoded({ extended: true }));

// Define routes
router.get("/", (req, res) => {
  res.render("index2");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/user", (req, res) => {
  res.render("acount");
});

router.get("/donate", (req, res) => {
  res.render("donate/donate1");
});

router.post("/query", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received form submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  res.render("index");
});

router.post("/submit-donation", (req, res) => {
  const { books, clothes, grains, footwear, toys, supplies } = req.body;
  console.log("Books:", books);
  console.log("Clothes:", clothes);
  console.log("Grains:", grains);
  console.log("Footwear:", footwear);
  console.log("Toys:", toys);
  console.log("Supplies:", supplies);
  res.render("donate/donate2.ejs");
});

router.get("/donate2", (req, res) => {
  res.render("donate/donate2");
});

router.post("/submit-info", (req, res) => {
  console.log("Form Data Received:");
  console.log("First Name:", req.body.fname);
  console.log("Last Name:", req.body.lname);
  console.log("Email:", req.body.email);
  console.log("Phone Number:", req.body.phone);
  console.log("Alternate Phone Number:", req.body.phone2);
  console.log("Flat-number/Room-number:", req.body.flat);
  console.log("Address:", req.body.addline);
  console.log("Nearby Landmark:", req.body.land);
  console.log("City:", req.body.city);
  console.log("State:", req.body.state);
  console.log("PIN Code:", req.body.pincode);
  console.log("Pick-up Note:", req.body.optnote);
  res.send("Data received");
});

router.get("/rewards", (req, res) => {
  res.render("rewards");
});

router.get("/ngo-login", (req, res) => {
  res.render("login_register/ngo_login");
});

router.get("/user-login", (req, res) => {
  res.render("login_register/user_login");
});

router.get("/register-user", (req, res) => {
  res.render("login_register/user-register");
});

router.get("/verification", (req, res) => {
  res.render("login_register/user-otp-verification");
});

router.get("/ngo-user", (req, res) => {
  res.render("login_register/user-register");
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Email:", email);
  console.log("passord:", password);
  res.render("index");
});

router.get("/ngo-register", (req, res) => {
  res.render("login_register/ngo-register");
});

export default router;
