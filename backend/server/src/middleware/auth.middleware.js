export function authMiddleware(req, res, next) {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    return res.status(401).json({
      success: false,
      message: "API key required",
    });
  }

  if (typeof apiKey !== "string" || apiKey.length < 20) {
    return res.status(401).json({
      success: false,
      message: "Invalid API key",
    });
  }

  req.apiKey = apiKey;
  next();
}
