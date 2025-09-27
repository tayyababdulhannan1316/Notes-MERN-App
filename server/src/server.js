import express from "express"; 
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";



// Load environment variables

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());
app.use(rateLimiter)


// Define your routes here
app.use("/api/notes", notesRoutes);

// Connect to the database and start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
  });
  }).catch((error) => {
  console.error("Database connection error:", error);
});
