const express = require("express");
const { BookController } = require("../controllers");
const { permit } = require("../../filters");
const { USER_ROLES } = require("../../utils");

const router = express.Router();

router.get("/", BookController.getBooks);
router.get("/:id", BookController.getBook);
router.post("/", permit(USER_ROLES.ADMIN), BookController.addProduct);
router.put("/:id", permit(USER_ROLES.ADMIN), BookController.updateProduct);
router.delete("/:id", permit(USER_ROLES.ADMIN), BookController.deleteProduct);
router.get("/:id/reviews", permit(USER_ROLES.ADMIN), BookController.getReviews);
router.post("/:id/reviews", permit(USER_ROLES.USER), BookController.addReview);
router.get("/:id/getLiked", permit(USER_ROLES.USER), BookController.getLiked);

module.exports = router;