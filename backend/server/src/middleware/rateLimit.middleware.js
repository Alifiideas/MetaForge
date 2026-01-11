import rateLimit from "express-rate-limit";

/**
 * Rate Limiter
 * Adjust limits based on plan later
 */
export const rateLimitMiddleware = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30, // 30 requests per minute per IP
  standardHeaders: true,
  legacyHeaders: false,

  handler: (req, res) => {
    res.status(429).json({
      success: false,
      message:
        "Too many requests. Please wait and try again.",
    });
  },
});
