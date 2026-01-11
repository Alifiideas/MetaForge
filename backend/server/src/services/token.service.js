import limits from "../../shared/constants/limits.json" assert { type: "json" };


/**
 * Validate token availability
 */
export const validateTokens = ({
  plan = "free",
  availableTokens,
  estimatedTokens,
}) => {
  const planLimits = limits[plan];

  if (!planLimits) {
    throw new Error("Invalid plan");
  }

  if (estimatedTokens > availableTokens) {
    return {
      allowed: false,
      message: "Not enough tokens",
    };
  }

  if (estimatedTokens > planLimits.maxTokensPerRequest) {
    return {
      allowed: false,
      message: "Request exceeds plan limits",
    };
  }

  return {
    allowed: true,
  };
};

/**
 * Deduct tokens after processing
 */
export const consumeTokens = ({
  tokensUsed,
  currentBalance,
}) => {
  const remaining = Math.max(
    currentBalance - tokensUsed,
    0
  );

  return remaining;
};
