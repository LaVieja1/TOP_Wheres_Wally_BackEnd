const Game = require('../models/game');
const asyncHandler = require('express-async-handler');

// DISPLAY GAME IMAGE
exports.game_img_get = asyncHandler(async (req, res, next) => {
    const game = await Game.findById(req.params.gameId);
    res.sendFile(`images/${game.imgURL}`, { root: 'public' });
});

// DISPLAY ITEM IMAGE
exports.item_img_get = asyncHandler(async (req, res, next) => {
    const item = await Game.findOne(
        { 'items._id': req.params.itemId },
        { items: { $elemMatch: { _id: req.params.itemId } } },
    ).exec();
    res.sendFile(`images/${item.items[0].imgURL}`, { root: 'public' });
});