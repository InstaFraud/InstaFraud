const {posts, users} = require('./seedData.js');

const {sequelize} = require('./db');
const {Post} = require('Backend/Models/post.js');

const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(posts.map(post => Post.create(post)));

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();
