const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({
        message: "Portfolio backend is running!"
    });
});

app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    console.log("New message received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    res.json({
        message: "Your message has been received!"
    });
});

app.listen(3000, () => {
    console.log("Backend running at http://localhost:3000/api/health");
});