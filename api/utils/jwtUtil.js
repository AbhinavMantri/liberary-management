const jwt = require("jsonwebtoken");

async function getToken(user) {
  return jwt.sign({id: user.id}, process.env.DB_SECRET_KEY, {expiresIn: '1h'});
}

async function isValidToken(token) {
    return new Promise(function(resolve, reject) {        
        jwt.verify(token, process.env.DB_SECRET_KEY, function(err, decoded) {
            if(err) {
                return reject(new Error("unauthorized"));
            } 

            return resolve(decoded.id);
        });

        return reject(new Error("unauthorized"));
    });
}

module.exports = {
    getToken,
    isValidToken
};