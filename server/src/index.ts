import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
// import router from "./routes.projectRoutes";
import projectRoutes from "./routes.projectRoutes";
/* ROUTE IMPORTS */

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.get("/", (req, res) => {
  res.send("This is home route");
});

// app.use("/projects", router);
app.use("/projects", projectRoutes);

/* SERVER */
const port = process.env.PORT || 3013;
app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});