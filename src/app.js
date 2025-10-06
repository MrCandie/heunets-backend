import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import workItemRoutes from "./routes/workItems.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Work Item Service is running" });
});

// Register routes
app.use("/api/work-items", workItemRoutes);

app.all(/.*/, (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

const PORT = process.env.PORT || 4000;
const db = process.env.DATABASE;

async function startServer() {
  try {
    const response = await mongoose.connect(db);
    console.log("database connection successful");

    app.listen(PORT, () => {
      console.log(`app running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
startServer();

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
