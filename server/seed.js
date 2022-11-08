const {posts} = require('./seedData.js');

const {sequelize} = require('./db');
const { Publication } = require('./Models/Publication');

const seed = async () => {

    try {
        await sequelize.sync({ force: true });

        await Promise.all(posts.map(post => Publication.create(post)));

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();