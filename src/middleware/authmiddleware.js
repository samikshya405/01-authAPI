import jwt from "jsonwebtoken";
const authmiddleware = async (req, res, next) => {
  const authHeaders = req.Headers.authorization;

  if (!authHeaders) {
    return res.json({
      status: "fail",
      message: "invalid authorization",
    });
  }
  const token = authHeaders.split(" ")[0];
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid or expired token",
    });
  }
};
export default authmiddleware;
