import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Cool root route with links
app.get("/", (req, res) => {
  res.send(`
    <h1 style="font-family: sans-serif; color: #4A90E2;">🚀 MERN Backend is Live!</h1>
    <p>Welcome! Here are your endpoints:</p>
    <ul>
      <li><a href="/api-docs" target="_blank">Swagger API Docs</a></li>
      <li><a href="/api/users" target="_blank">GET All Users</a></li>
    </ul>
    <p>Use Thunder Client or Postman to test POST requests!</p>
  `);
});

app.use("/api/users", userRoutes);

// Swagger Config
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Production Ready API",
      version: "1.0.0",
    },
  },
  apis: [],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

export default app;
