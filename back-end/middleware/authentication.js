const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    // This line attempts to read the value of the cookie specified by cookieName from the incoming request.
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) return next();

    try { 
      const userPayload = validateToken(tokenCookieValue);
      // This is the most critical step. If the token is valid, the decoded user data is attached directly to the req (request) object as req.user. Because the req object is passed from middleware to middleware, any route handler further down the line can now easily check req.user to see exactly who is logged in.
      req.user = userPayload;
    } catch (error) {
      console.error("❌ JWT Validation Error:", error.message);
    }
    // Crucial: Move to the next middleware regardless of whether the token succeeded or failed
    return next(); 
  };
}

module.exports = {
  checkForAuthenticationCookie,
};
