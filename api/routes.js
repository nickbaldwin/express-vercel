const express = require("express");
const router = express.Router();

const db = require("./db");

router.post('/newsecret', (req, res) => {

  // todo - fail properly
  if (!req.body || !req.body.name || !req.body.value) {
    return res.send(JSON.stringify({
      error: "must supply name and value"
    }));
  }

  const secret = {
    name: req.body.name,
    value: req.body.value
  }
  let newSecret = db.addSecret(secret);
  const r = {
    response: "accepted",
    message: `successfully accepted secret - name: ${newSecret.name} value: ${newSecret.value} - with id: ${newSecret.id} `,
    newSecret
  }
  return res.send(JSON.stringify(r));
});

router.get("/secrets", async (req, res) => {
  try {
    res.json(db.getSecrets());
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});



module.exports = router;
