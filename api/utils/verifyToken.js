import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "authentication faield!"));
  }
  console.log(process.env.JWT)
  console.log(token)

  jwt.verify(token, process.env.JWT, (err, user) => {

    if (err) return next(createError(403, "token not valid!"));
    //new req property
    req.user = user;
    next();
  });
};
// //user
// export const verifyUser = (res, req, next) => {
//   verifyToken(req, res, () => {
//     if (req.user.id === req.params.id || req.user.isAdmin) {
//       next();
//     } else {
//       return next(createError(403, "Not authorized!"));
//     }
//   });
// };
// //admin
// export const verifyAdmin = (res, req, next) => {
//   verifyToken(req, res, () => {
//     if (req.user.isAdmin) {
//       next();
//     } else {
//       return next(createError(403, "Not authorized!"));
//     }
//   });
// };
