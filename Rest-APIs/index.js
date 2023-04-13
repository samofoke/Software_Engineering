import express from "express";
import routes from "./src/routes/api-routes";

const app = express();
const PORT = 8080;

routes(app);

app.get("/", (req, res) => res.send(`Our Server is running on port: ${PORT}`));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
