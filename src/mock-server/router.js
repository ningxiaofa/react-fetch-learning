const express = require("express");
const router = express.Router();

router.get("/api/list", function(req, res) {
    const data = [
        {
            name: "william",
            age: 28,
        },
        {
            name: "williamning",
            age: 28,
        }
    ];

    res.send(data);
});

module.exports = router;