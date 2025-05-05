// middleware/verifyCivicJWT.js
import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";

const client = jwksClient({
  jwksUri: "https://auth.civic.com/.well-known/jwks.json",
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.getPublicKey();
    callback(null, signingKey);
  });
}

export const verifyCivicJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Missing Civic token" });

  jwt.verify(token, getKey, {}, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid Civic token" });

    req.user = decoded;
    next();
  });
};
