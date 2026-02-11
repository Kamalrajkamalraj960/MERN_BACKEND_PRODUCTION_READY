import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const app = express();

app.use(cors());
app.use(express.json());

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
