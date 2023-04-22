import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/api-routes";

const app = express();
const PORT = 8080;

//The mongodb conection

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/crbdb", {
  useNewUrlParser: true,
});

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => res.send(`Our Server is running on port: ${PORT}`));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
