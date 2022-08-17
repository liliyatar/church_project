const Feedback = require('../models/Feedback');
const errorHandler = require('../utils/errorHandler');

module.exports.create = async function(req, res) {
    try {
        const feedback = await new Feedback({
            name: req.body.name,
            phone: req.body.phone,
            text: req.body.text,
        }).save();
        res.status(201).json(feedback);
    } catch (e) {
        errorHandler(res, e);
    }
}