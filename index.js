const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const TaskRouter = require("./src/routes/task.routes");
const connectToDatabase = require("./src/database/mongoose.database");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectToDatabase();

app.use("/tasks", TaskRouter);

const PORT = process.env.PORT || 8000; // Porta 8000 para uso local
app.listen(PORT, () => {
    console.log(`Listen port http://localhost:${PORT}/`);
});
