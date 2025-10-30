import jwt from 'jsonwebtoken'
const JWT_SECRET = "notes_app_key"; 


export function authMiddleware(req, res, next) {
   if (process.env.NODE_ENV === 'test') {
    // skip authentication in test mode
    req.user = { id: 1 };
    return next();
  }



  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ error: "No token provided" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Invalid token" });


  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = decoded; // contains user id

    next();
  });

}

export default authMiddleware;