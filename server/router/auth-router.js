const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controller.js');
const validate = require("../middlewares/validate-middleware.js");
const signUpSchema = require('../validators/auth-validator.js');

router.route("/").get(authControllers.home);
router.route("/register").post(validate(signUpSchema) ,authControllers.register);
router.route("/login").post(authControllers.login);


module.exports = router;