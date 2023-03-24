const express = require("express");
var cors = require('cors');
const app = express();
const routes = require("./api/routes");

app.use(cors());
app.use(express.json({ extended: false }));

app.use("/", routes);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
