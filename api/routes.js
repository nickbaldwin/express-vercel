const express = require("express");
const router = express.Router();

/**
 * GET product list.
 *
 * @return list | empty.
 */
router.get("/secrets", async (req, res) => {
  try {
    res.json([
      {
        "id": 1,
        "name": "secret one",
        "value": "1111"
      },
      {
        "id": 2,
        "name": "secret two",
        "value": "2222"
      },
      {
        "id": 3,
        "name": "secret three",
        "value": "3333"
      }
    ]);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
