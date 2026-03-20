// import jwt from "jsonwebtoken";

// const authenticateToken = (req, res, next) => {
// const token = req.cookies.token;
// if (!token) {
//     return res.status(401).json({ error: "Access denied. No token provided." });
// }
//  try {
//     const verifed = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = verifed;
//     next(); 

//     } catch (error) {
//         res.status(400).json({ error: "Invalid token" });
//     }
// };

// export default authenticateToken;
import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

    if (!token) {
        return res.status(401).json({ error: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ error: "Invalid token" });
    }
};

export default authenticateToken;