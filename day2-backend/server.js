const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const cors = require("cors");

const app = express();

// Enable CORS
app.use(cors());

const PORT = 3000;

// Home Route
app.get("/", (req, res) => {

    res.send("Server is running successfully 🚀");

});

// Users Route
app.get("/users", async (req, res) => {

    try {

        // File path
        const filePath = path.join(__dirname, "data.txt");

        // Read file asynchronously
        const data = await fs.readFile(filePath, "utf-8");

        // Convert text data into array
        const users = data
            .split("\n")
            .filter(line => line.trim() !== "")
            .map(line => {

                const [id, name, status] = line.split(",");

                return {
                    id: Number(id.trim()),
                    name: name.trim(),
                    status: status.trim()
                };

            });

        // Filter only active users
        const activeUsers = users.filter(
            user => user.status.toLowerCase() === "active"
        );

        // Send JSON response
        res.json({
            success: true,
            total: activeUsers.length,
            data: activeUsers
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }

});

// Start server
app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});