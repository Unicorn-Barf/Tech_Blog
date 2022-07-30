const seedUsers = require('./users');
const seedBlogs = require('./blogs');

const sequelize = require('../config/connectiton');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    await seedBlogs();
    console.log('\n----- BLOGS SEEDED -----\n');

    process.exit(0);
};

(async () => {
    await seedAll();
  })();