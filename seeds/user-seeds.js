const { User } = require('../models');

const userData = [{
        username: 'simon',
        password: 'simon'

    },
    {
        username: 'tim',
        password: 'tim'
    },
    {
        username: 'tony',
        password: 'tony'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;