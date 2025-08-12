const express = require("express");
const { signup, verifyEmail, login } = require("../controllers/authController");

const router = express.Router();

// User signup with email verification

/**
* @swagger
* /api/auth/signup:
*   post:
*     summary: create User
*     tags:
*       - Auth
*     produces:
*       - application/json
*     parameters:
 *      - in: body
 *        name: Add User
 *        description: Add User in MongoDB.
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - email
 *            - password
 *            - bio
 *          properties:
 *            name:
 *              type: string
 *            email:
 *              type: string
 *            password:
 *              type: string
 *            bio:
 *              type: string
*     responses:
*        200:
*          description: student data added
*        400:
*          description: Bad Request
*        500:
*          description: Server Error
*/
router.post("/signup", signup);

// Email verification
router.get("/verify", verifyEmail);

// Login
router.post("/login", login);

module.exports = router;
