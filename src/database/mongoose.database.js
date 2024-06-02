const mongoose = require("mongoose");

const connectToDatabase = () => {
    mongoose
        .connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fsctaskmanagercluster.vrb4mix.mongodb.net/?retryWrites=true&w=majority&appName=FscTaskManagerCluster`,
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
        .then(() => {
            console.log("Connected to MongoDB!");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
        });
};

module.exports = connectToDatabase;
