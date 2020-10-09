const express = require("express");
const { UserController } = require("../controller");
const { models } = require("../../dbConnection");
const { authenticate, permit } = require("../../filters");
const { USER_ROLES } = require("../../utils");
const router = express.Router();

router.post("/auth", UserController.authentication);
router.get("/favourites", authenticate, permit(USER_ROLES.USER), UserController.getFavourites);
router.post("/read-history", authenticate, permit(USER_ROLES.USER), UserController.addReadHistory);
router.get("/read-history", authenticate, permit(USER_ROLES.USER), UserController.getReadHistory);

module.exports = router;