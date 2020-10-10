const { BookService } = require("../services");
const { UserService } = require("../../user/service");
const { request } = require("express");
const { USER_ROLES } = require("../../utils");


module.exports = {
    getBooks: function(req, res) {
        BookService.getBooks().then(data => res.json({ data }));
    },
    getBook: function(req, res) {
        BookService.getBook(req.params.id)
        .then(data => {
            if(req.user.role === USER_ROLES.USER)
                UserService.addFavourite(req.user, data);
            res.json({ data });
        })
        .catch(err => {
            res.status(404).send({ reason: err.message });
        });

    },
    addProduct: function(req, res) {
        BookService.addProduct(req.body)
        .then(data => res.status(201).send(data))
        .catch(err => res.status(400).send({ reason: err.message }));
    },
    updateProduct: function(req, res) {
        BookService.updateProduct(req.body, req.params.id)
        .then(() => res.status(202).send())
        .catch(err => res.status(400).send({ reason: err.message }));
    },
    deleteProduct: function(req, res) {
        BookService.deleteProduct(req.params.id)
        .then(() => res.status(204).send())
        .catch(err => res.status(400).send({ reason: err.message }));
    },
    getReviews: function(req, res) {
        BookService.getReviews(req.params.id)
        .then(data => res.json({ data }));
    },
    addReview: function(req, res) {
        BookService.addReview(req.body, req.params.id, req.user)
        .then(data => res.status(201).send())
        .catch(err => {
            res.status(400).send({ reason: err.message })
        });
    }
};