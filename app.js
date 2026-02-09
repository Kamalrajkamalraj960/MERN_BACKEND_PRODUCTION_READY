import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

/* Helmet Security */
app.use(helmet());

/* Rate Limit for Auth Routes */
const loginLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: {
    message: "Too many login attempts, please try again later"
  }
});

app.use("/api/auth", loginLimiter);

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

export default app;
