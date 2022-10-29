const express = require("express");
const cors = require("cors");
const detailRoute = require("./routes/detailRoute");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/v1", detailRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
