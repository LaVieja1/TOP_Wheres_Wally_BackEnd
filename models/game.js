const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GameSchema = new Schema({
    title: { type: String, required: true },
    imgURL: { type: String, required: true },
    items: {
        type: [
            {
                name: { type: String, required: true },
                imgURL: { type: String, required: true },
                coords: {
                    type: {
                        topBorder: { type: Number, required: true },
                        bottomBorder: { type: Number, required: true },
                        leftBorder: { type: Number, required: true },
                        rightBorder: { type: Number, required: true },
                        center: { type: Object, required: true },
                        _id: false,
                    },
                },
            },
        ],
    },
    key: { type: Number, required: true },
});

module.exports = mongoose.model('Game', GameSchema);