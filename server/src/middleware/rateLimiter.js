import ratelimit from "../config/upstash.js";


const rateLimiter = async (req, res, next) => {
  try {
  
    const {success} = await ratelimit.limit("my-rate-limit");
    if (!success) {
      return res.status(429).json({ message: "Too many requests, please try again later." });
    }
    // Implement your rate limiting logic here
    next();
  } catch (error) {
    console.log("Rate Limit Error:", error);
    next(error); // Allow the request to proceed even if rate limiting fails
    // console.error("Rate Limiter Error:", error);
    // res.status(500).json({ message: "Internal Server Error" });
  }
};

export default rateLimiter;  