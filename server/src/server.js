import express from "express"; 
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";



// Load environment variables

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// Middleware
if(process.env.NODE_ENV !== "production") {
app.use(cors({
  origin: "http://localhost:5173"
}));
}
app.use(express.json());
app.use(rateLimiter)


// Define your routes here
app.use("/api/notes", notesRoutes);

if(process.env.NODE_ENV === "production")
  {
  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client","dist","index.html"))
  });
  } 
 

// Connect to the database and start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
  });
  }).catch((error) => {
  console.error("Database connection error:", error);
});
