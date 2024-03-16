//utils
const prisma = require("../utils/prismaClient");
const { verifyToken } = require("../utils/handleJWT");

//utils
const CustomError = require("../utils/CustomError");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookie.token;

    if (!token) {
      const error = new CustomError("Token not found", 401, "auth-middleware");
      next(error);
    }

    const data = verifyToken(token);

    if (!data) {
      const error = new CustomError(
        "Request is not authorized",
        401,
        "auth-middleware"
      );
      next(error);
    }

    const { email } = data;
    req.user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    req.recievedToken = token;

    if (!req.user) {
      const error = new CustomError(
        "User does not exist",
        404,
        "auth-middleware"
      );
      next(error);
    }

    next();
  } catch (err) {
    const error = new CustomError(
      "Request is not authorized",
      401,
      "auth-middleware"
    );
    next(error);
  }
};

module.exports = authMiddleware;
