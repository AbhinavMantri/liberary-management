const { jwtUtil } =  require("../utils");
const { UserService } = require("../user/service");

// middleware for user authentication
module.exports = async function authorize(req, res, next) {
    const token = req.headers['access-token'];
    
    // set user on-success
    try {
        const id = await jwtUtil.isValidToken(token);
        req.user = await UserService.getUser(id);
        // always continue to next middleware
        next();
    }
    catch(err) {
        res.status(401).send({ "reason": err.message });
    };
}