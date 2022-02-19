import bodyParser from "body-parser";
import compression from "compression";
import express from "express";

// Controllers (route handlers)
import * as homeController from "./controllers/home.controller";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Primary app routes.
 */
app.get("/", homeController.index);

export default app;
