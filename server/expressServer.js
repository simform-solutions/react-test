import express from "express";
import dbconnect from "./dbconnect";
import middleware from "./middleware";
const app = express();
dbconnect(app);
middleware(app);

export default app;
