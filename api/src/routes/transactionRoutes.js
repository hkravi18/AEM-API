const express = require("express");
const router = express.Router();

//controllers
const {
  getTransactionsList,
  getTransactionsSummary,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transactionController.js");

//middleware
const authMiddleware = require("../middleware/authMiddleware.js");

router.use(authMiddleware);

router.get("/", getTransactionsList);
router.get("/summary", getTransactionsSummary);
router.post("/", addTransaction);
router.delete("/:id", deleteTransaction);

module.exports = router;
