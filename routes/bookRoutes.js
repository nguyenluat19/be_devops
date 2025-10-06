const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const auth = require("../middlewares/auth");

router.get("/search", bookController.search);
router.get("/", bookController.getAll);
router.post("/", auth, bookController.add);
router.put("/:id", auth, bookController.update);
router.delete("/:id", auth, bookController.delete);

module.exports = router;
