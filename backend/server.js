import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import priceRoutes from "./routes/priceRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); 

app.use("/api", authRoutes);
app.use("/api", priceRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
