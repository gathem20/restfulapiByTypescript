import http from "http";
import express from "express";
import bodyparser from "body-parser";
import cookieparser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import router from "./router/index";
const app = express();

app.use(express.json());
app.use(compression());
app.use(
  cors({
    credentials: true,
  })
);
app.use(helmet());
app.use(cookieparser());
app.use(bodyparser.json());

const server = http.createServer(app);

const Mongo_url = mongoose.connect("mongodb://localhost:27017/users");
mongoose.Promise = Promise;
Mongo_url.then(() => {
  console.log("db is connected");
}).catch((err) => {
  console.log("faield connection");
});
mongoose.connection.on("error", (error: Error) => console.log(error));
app.use("/", router);
const port: number = 3000;
server.listen(port, () => {
  console.log(`server is connected on port ${port}`);
});
