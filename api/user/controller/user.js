const { UserService } = require("../service")

module.exports = {
    authentication: function(req, res) {
        UserService.authenticate(req.body.email, req.body.password)
        .then(user => {
            res.json({ user });
        })
        .catch(err => {
            res.status(401).send({ reason: err.message });
        });
    },
    getFavourites: function(req, res) {
        UserService.getFavourites(req.user)
        .then(data => {
            res.json({ data });
        })
        .catch(err => {
            res.status(400).send({ reason: err.message });
        })
    },
    addReadHistory: function(req, res) {
        UserService.markReadHistory(req.body.id, req.user)
        .then(data => res.status(201).send())
        .catch(err => res.status(400).send({ reason: err.message }));
    },
    getReadHistory: function(req, res) {
        UserService.getReadHistory(req.user)
        .then(data => res.json({ data }))
        .catch(err => res.status(400).send({ reason: err.message }));
    }
}