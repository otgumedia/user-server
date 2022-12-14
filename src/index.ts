import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import usersRoute from "./routes/users";

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", usersRoute);

app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});
