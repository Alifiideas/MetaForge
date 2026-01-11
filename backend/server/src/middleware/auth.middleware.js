/**
 * Auth Middleware
 * - Validates API key presence
 * - Can be extended to JWT / user auth
 */

export function authMiddleware(req, res, next) {
  const apiKey =
    req.headers["x-api-key"] ||
    req.body.apiKey ||
    req.query.apiKey;

  if (!apiKey) {
    return res.status(401).json({
      success: false,
      message: "API key required",
    });
  }

  // Basic validation (length / format)
  if (typeof apiKey !== "string" || apiKey.length < 20) {
    return res.status(401).json({
      success: false,
      message: "Invalid API key",
    });
  }

  // Attach to request for downstream services
  req.apiKey = apiKey;

  next();
}
