const jwt =  require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token)
    return res.status(404).json({ 
    message: "No token created, authorization denied"
 });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (error) {
    res.status(404).json({ 
        message: "Invalid token" 
    });
  }
};