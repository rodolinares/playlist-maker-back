import bodyParser from "body-parser";
import compression from "compression";
import express from "express";
import cors from "cors";

// Controllers (route handlers)
import * as loginController from "./controllers/login.controller";

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
app.get("/login", loginController.login);
app.get("/callback", loginController.callback);

export default app;
