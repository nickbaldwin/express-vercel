const express = require("express");
const app = express();
const routes = require("./api/routes");

app.use(express.json({ extended: false }));

app.use("/api", routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
