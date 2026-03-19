// import {body, validationResult} from "express-validator";

// export const validateUserInput = [
//     body("email").isEmail().withMessage("Invalid email format"),
//     body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")];

// export const handleValidationErrors = (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     next();
// };
import { body, validationResult } from "express-validator";

export const validateUserInput = [
  // First Name
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ min: 2, max: 30 })
    .withMessage("First name must be between 2 and 30 characters")
    .matches(/^[A-Za-z]+$/)
    .withMessage("First name must contain only letters"),

  // Last Name
  body("lastName")
    .trim()
    .notEmpty()
    .isLength({ min: 2, max: 30 }),

  // Email
  body("email")
    .trim()
    .isEmail()
    .normalizeEmail(),

  // Password
  body("password")
    .isLength({ min: 6 })
];

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }
  next();
};