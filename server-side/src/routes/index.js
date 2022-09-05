const router = require("express").Router();
const TaskController = require("../controllers");

router.get("/tasks", TaskController.get);
router.post("/tasks", TaskController.post);
router.put("/tasks/:id", TaskController.put);
router.delete("/tasks/:id", TaskController.rmv);

module.exports = router