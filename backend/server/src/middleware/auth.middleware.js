export function authMiddleware(req, res, next) {
  const apiKey = req.header("x-api-key");

  // 1️⃣ Missing API key
  if (!apiKey) {
    return res.status(401).json({
      success: false,
      message: "API key missing",
    });
  }

  // 2️⃣ Invalid format
  if (typeof apiKey !== "string") {
    return res.status(401).json({
      success: false,
      message: "Invalid API key type",
    });
  }

  // 3️⃣ Compare with server key
  if (apiKey !== process.env.API_KEY) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized API key",
    });
  }

  // 4️⃣ Attach key (optional)
  req.apiKey = apiKey;

  next();
}

