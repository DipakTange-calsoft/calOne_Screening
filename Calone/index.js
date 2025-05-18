require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./Configs/db");
const screeningRoutes = require("./Routes/screening.route");
const exampleRoute = require("./Routes/example.route");
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", exampleRoute);
app.use("/api", screeningRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  connectDB();
  console.log(`Server running at http://localhost:${PORT}/`);
});

module.exports = app;
