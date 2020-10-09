module.exports = function permit(...args) {

    return (req, res, next) => {   
        if (req.user && args.includes(req.user.role)) {
          next(); // role is allowed, so continue on the next middleware
        } else {
          res.status(403).json({ reason: "Forbidden" }); // user is forbidden
        }
    }
}