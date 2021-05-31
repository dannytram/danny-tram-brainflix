const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/Routes")

// Configuration
require("dotenv").config();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({
        routes: [
            {
                method: "get",
                endpoint: "/videos/:id",
            },
            {
                method: "get",
                endpoint: "/videos/:id",
            },
            {
                method: "post",
                endpoint: "/videos",
                body: {
                    title: "string",
                    description: "string",
                },
            },
        ],
    });
});

app.use("/videos", routes)

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});