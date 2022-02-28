import bodyParser from "body-parser";
import compression from "compression";
import express from "express";
import cors from "cors";

// Controllers (route handlers)
import * as authController from "./controllers/auth.controller";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/**
 * Primary app routes.
 */
app.get("/auth", authController.auth);
app.get("/callback", authController.callback);

export default app;
