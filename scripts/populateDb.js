const mongoose = require('mongoose');
require('dotenv').config();

const mongoDB = process.env.MONGODB_URL;

const Game = require('../models/game');

const game1 = new Game({
    title: 'Wally 1 - Deportes',
    imgURL: 'wally1-deportes.png',
    items: [
        {
            name: 'Wally',
            imgURL: 'wally.png',
            coords: {
                x: 205,
                y: 978,
            }
        },
        {
            name: 'Ladron',
            imgURL: '1-ladron.png',
            coords: {
                x: 828,
                y: 210,
            }
        },
        {
            name: 'Wizard',
            imgURL: 'wizard.png',
            coords: {
                x: 1174,
                y: 259,
            }
        },
    ],
    key: 1,
});

const game2 = new Game({
    title: 'Wally 2 - Feria',
    imgURL: 'wally2-feria.jpg',
    items: [
        {
            name: 'Wally',
            imgURL: 'wally.png',
            coords: {
                x: 1420,
                y: 562,
            }
        },
        {
            name: 'Odlaw',
            imgURL: 'odlaw.png',
            coords: {
                x: 1140,
                y: 268,
            }
        },
        {
            name: 'Wenda',
            imgURL: 'wenda.png',
            coords: {
                x: 189,
                y: 867,
            }
        },
    ],
    key: 2,
});

const game3 = new Game({
    title: 'Wally 3 - Playa',
    imgURL: 'wally3-playa.jpg',
    items: [
        {
            name: 'Wally',
            imgURL: 'wally.png',
            coords: {
                x: 1854,
                y: 730,
            }
        },
        {
            name: 'Odlaw',
            imgURL: 'odlaw.png',
            coords: {
                x: 323,
                y: 693,
            }
        },
        {
            name: 'Wizard',
            imgURL: 'wizard.png',
            coords: {
                x: 807,
                y: 685,
            }
        },
    ],
    key: 3,
});

async function main() {
    console.log('Conectando a MongoDB...');
    try {
        await mongoose.connect(mongoDB);
    } catch (error) {
        console.log(error);
    }

    console.log('Conectado. Cargando datos...');

    try {
        await Promise.all([game1.save(), game2.save(), game3.save()]);
        console.log('Games agregados a la DB');
    } catch (error) {
        console.log(error);
    }
    mongoose.connection.close();
    console.log('Conexión cerrada');
}

main();